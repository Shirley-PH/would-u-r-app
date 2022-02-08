import React from 'react';
import '../../App.css'; 
import { useSelector } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { setAuthed } from '../actions/authedUser';
import Login from './Login'


export default function Navegation() {

  const state = useSelector((state) => state);

  const history = useHistory();

  const handleLogOut = (event) => {
        event.preventDefault();
        setAuthed("");
        history.push("/");
      };
      //console.log('state', state)
  if (!state.authedUser.loggedIn) return (
    <Login/>
  )
  return (
  <div>
  <Navbar bg="dark" variant="dark"  sticky="top">
                <Navbar.Brand>
                WUR GAME APP
                </Navbar.Brand>

                <Nav className="justify-content-end  me-auto positionLink">
                <Nav.Item>
                    <Link to={`/home`}>Home</Link>
                </Nav.Item>

                <Nav.Item>
                <Link to={`/add`}>New Question</Link>
                </Nav.Item>

                <Nav.Item>
                <Link to={`/leaderboard`}>Leader Board</Link>
                </Nav.Item>
                
                </Nav>

                <div>
                <Nav >
                  <Button className="item" variant="dark">
                    {state.users[state.authedUser.userId].avatarURL ? (
                      <img className='avatar' src={state.users[state.authedUser.userId].avatarURL} alt="" />
                    ) : (
                      <i className="user circle icon"></i>
                    )}
                    Hi {state.users[state.authedUser.userId].name}!
                  </Button>

                  <Button variant="dark" className="item" onClick={handleLogOut}>
                    <i className="sign out alternate icon"></i>
                    Log Out
                  </Button>
                </Nav>
                </div>
                
                
                
        </Navbar>
  </div>
  )
}

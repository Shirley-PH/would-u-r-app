import React from 'react';
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
      console.log('state', state)
  if (!state.authedUser.loggedIn) return (
    <Login/>
  )
  return (
  <div>
  <Navbar bg="dark" variant="dark"  sticky="top">
                <Navbar.Brand>
                Shirley's Company
                </Navbar.Brand>

                <Nav className="me-auto">
                <Link to={`/home`}>Home</Link>---
                <Link to={`/add`}>New Question</Link>---
                <Link to={`/leaderboard`}>Leader Board</Link>
                </Nav>

                <div>
                <Nav >
              <Button className="item">
                    {state.users[state.authedUser.userId].avatarURL ? (
                      <img src={state.users[state.authedUser.userId].avatarURL} alt="" />
                    ) : (
                      <i className="user circle icon"></i>
                    )}
                    Hi {state.users[state.authedUser.userId].name}!
                  </Button>

                  <Button className="item" onClick={handleLogOut}>
                    <i className="sign out alternate icon"></i>
                    Log Out
                  </Button>
                </Nav>
                </div>
                
                
                
        </Navbar>
  </div>
  )
}

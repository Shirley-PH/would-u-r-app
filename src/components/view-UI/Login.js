
import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import { SET_AUTHED_USERS } from '../../redux/constants';


export default function Login() {
    //modificar esto para usar el hooks USESTATE
    const [userId, setUserId] = React.useState("") 
 

    const dispatch = useDispatch();

    const history = useHistory();

    function handleIdentication(event){
        event.preventDefault()
        setUserId(event.target.value)

    }
    function handleSubmit(event){
        event.preventDefault()
        if (history.location.pathname.match("/home") || history.location.pathname === '/') {
            history.push("/home");
        } 
        dispatch({
            type: SET_AUTHED_USERS, 
            payload: userId,
        })
    }

  return <div>
            <div className="container">
        
                <div className="login">
                    <h1>Welcome to Would you rather Game</h1>
                    <Card body style={{ width: '34rem'}}>
                        <form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Label>Who's playing</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(event) =>handleIdentication(event)}>
                        <option defaultValue=''>Select your account</option>
                        
                            <option value="tylermcginnis">Tyler </option>
                            <option value="sarahedo">Sarah </option>
                            <option value="johndoe">John </option>
                            
                           
                            
                        </Form.Select>
                        </Form.Group>
                        <Button onClick={handleSubmit} variant="primary" disabled={userId ===""}>LOG IN</Button>
                                
                        </form>
                    </Card>
                </div>  
        
        
            </div>
  </div>;
}

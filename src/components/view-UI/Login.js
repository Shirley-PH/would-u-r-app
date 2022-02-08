
import React from 'react';
import '../../App.css'; 

import {useDispatch} from 'react-redux';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import { SET_AUTHED_USERS } from '../../redux/constants';


export default function Login() {
    //modificar esto para usar el hooks USESTATE
    const [userId, setUserId] = useState(""); 
 

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
/*                             
*/
  return <div>
            <div className="container">
        
                <div className="login">
                    <h1 className='colorText'>Welcome to would you rather Game</h1>
                    <Card body>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <img className='image-avatar-login' src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Round&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Tongue&skinColor=Tanned' alt="avatar-welcome"/>
                            <Form.Label className='w-playing'>Who's playing</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(event) =>handleIdentication(event)}>
                            <option defaultValue=''>Select your account</option>
                            
                                <option value="tylermcginnis">Tyler </option>
                                <option value="sarahedo">Sarah </option>
                                <option value="johndoe">John </option>
                                
                            
                                
                            </Form.Select>
                            </Form.Group>
                            <Button onClick={handleSubmit}  className="mx-2" disabled={userId ===""}>LOG IN</Button>
                                
                        </Form>
                    </Card>
                </div>  
        
        
            </div>
  </div>;
}

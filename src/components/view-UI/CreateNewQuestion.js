import React from 'react';
import { useDispatch } from 'react-redux';
import { saveQuestion } from '../../redux/utils/helper';
import { connect } from 'react-redux';
import Navegation from './Navegation';
import {Redirect} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'; 
import '../../App.css'; 

//Igual a NEWPOLL
 function CreateNewQuestion({authedUser}) {
  
   // console.log('this is authed.authed.userId', authedUser.authedUser.userId); 
  const [optionOneText, setOptionOneText] = React.useState("")
  const [optionTwoText, setOptionTwoText] = React.useState("")
  const [toHome, setHome]= React.useState(false)
  
  const handleOptionOneChange = (event) => {
      setOptionOneText(event.target.value)
  }
  
  const handleOptionTwoChange= (event)=> {
      setOptionTwoText(event.target.value)
  }   

  const dispatch= useDispatch();

  const addQuestion = (event) =>{
      event.preventDefault();
      
      dispatch(saveQuestion(optionOneText, optionTwoText, authedUser))
      
      setOptionOneText("")
      setOptionTwoText("")
      setHome(true)
  }

  if (toHome === true) {
      return <Redirect to='/home' />
  }

  return(
      <div>  
          <Navegation/>
          <div className='container padre'>
            <div className='create-question '>
            <h3>Create your own question!</h3>
            <h4>Would you rather... </h4>

                <Form onSubmit={addQuestion} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Write your option 1</Form.Label>
                        <Form.Control type="text" onChange = {handleOptionOneChange} placeholder="Write here..." />
                        
                    </Form.Group>
                        <span>Or </span>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Write your option 2</Form.Label>
                        <Form.Control type="text" onChange={handleOptionTwoChange} placeholder="Write here..." />
                    </Form.Group>
                    
                    <Button variant="primary" onClick={addQuestion} type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
        </div>
      </div>
  ) 
}

function mapStateToProps(state) {
    //console.log('?que es el state en createNewQuestion: ', state); 

  return {
      authedUser: state.authedUser.userId,

  }
}
export default connect(mapStateToProps)(CreateNewQuestion)
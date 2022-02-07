import React from 'react';
import { useDispatch } from 'react-redux';
import { saveQuestion } from '../../redux/utils/helper';
import { connect } from 'react-redux';
import Navegation from './Navegation';
import {Redirect} from 'react-router-dom'

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
      
          <h1>Create your own poll!</h1>
          <h1>Would you rather... </h1>
          
          <form onSubmit = {addQuestion}>
          <p> Enter your option 1</p>
          <input type= "text"
          onChange = {handleOptionOneChange}
          />
          <h1> or </h1>
          <p> Enter your option 2 </p>
          <input type= "text"
          onChange= {handleOptionTwoChange}
          />
          <br/>
          <br/>
          <button onClick= {addQuestion}> Submit </button>
          </form>
      </div>
  ) 
}

function mapStateToProps(state) {
    console.log('?que es el state en createNewQuestion: ', state); 

  return {
      authedUser: state.authedUser.userId,

  }
}
export default connect(mapStateToProps)(CreateNewQuestion)
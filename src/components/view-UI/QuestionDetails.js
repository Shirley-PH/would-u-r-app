import React from 'react';
import {connect, useDispatch} from "react-redux"
import Navegation from './Navegation';
import NotFound from './NotFound';
import {saveQuestionAnswer} from "../../redux/utils/helper"
import '../../App.css'; 
import {Form, Button} from 'react-bootstrap'

 function QuestionDetails( {authedUser,
  username,
  optionOne,
  optionTwo,
  questionId,
  optionOneVotes,
  optionTwoVotes,
  totalVotes,
  answerId,
  avatarURL,
  nomatchId,
  }
  ) {

    const [value, setValue]= React.useState("");

   const dispatch = useDispatch();

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const answerQuestion = (event) => {
      event.preventDefault();
      const answerId = value;
  
      dispatch(saveQuestionAnswer({ authedUser, questionId, answerId }));
      console.log('question ID ',questionId )
    };
  
    const optionOnePercent = () => {
      return (optionOneVotes / totalVotes) * 100;
    };
    const optionTwoPercent = () => {
      return (optionTwoVotes / totalVotes) * 100;
    };
  
    if (nomatchId) return (
      <div>
        <NotFound/>
      </div>
      )
    
  return <div>
      <Navegation />
      <img className='image-avatar-body' src={avatarURL} alt="avatarURL"/> 
      <div className='padre-body'>

{!answerId ? (
  <div className='create-question'>
        <Form className="detail-form container" onSubmit={answerQuestion}>
          <h2> {username} asks...</h2>
          <p>Would you rather... </p>
          <Form.Check inline
            name="answer"
            type="radio"
            id="optionOne"
            value="optionOne"
            onChange={handleChange}
          />
          <span>{optionOne}</span>
        <span>or </span>
          <Form.Check inline
            name="answer"
            type="radio"
            id="optionTwo"
            value="optionTwo"
            onChange={handleChange}
          />
          <span>{optionTwo}</span>

          <br />
          <br />
          <Button variant="secondary"  type="submit">
            Submit{" "}
          </Button>
        </Form>
        </div>
) : (
  <div className='create-qestion'>
  <div className='container altura-result'>
    <h2 style={{color: "blue"}}> {username} asks...</h2>
    <div className="bg" style={{height: "80px"}} > 
    
    <p className='position-center-padre'>
      Would you rather {optionOne} or {optionTwo} ?{" "}
    </p>

   
    </div>
    
    <h3 className='text-decoration'>Results:</h3>

    <p className='text-cursive'> {optionOne}</p>
    
      {"optionOne" === answerId && (
        <div>
          <p style={{ color: "green" }}>This is Your vote!</p>
        </div>
      )}
      {optionOneVotes} out of {totalVotes} voted this
    
    <p>That's {optionOnePercent().toString().slice(0, 5)}% </p>
    
    <hr/>
    {"optionTwo" === answerId && (
      <div>
        <p style={{ color: "green" }}>This is Your vote!</p>
      </div>
    )}
    <p className='text-cursive'> {optionTwo}</p>
    <p>
      {" "}
      {optionTwoVotes} out of {totalVotes} voted this
    </p>
    <p>That's {optionTwoPercent().toString().slice(0, 5)} % </p>
  </div>
  </div>
)}
  </div>
  </div>;
}


function mapStateToProps(state, { id }) {
 

  if (state.questions[id] === undefined ) {
    return {
    nomatchId: true
  }}

  const user = state.users[state.questions[id].author];
  const authUser = state.authedUser.userId;
  const question = state.questions[id];
   const answerIdd=  state.users[authUser].answers; 

   console.log('answerIdd ')
  console.log(answerIdd)
  console.log('state ')
  console.log(state)
   console.log('user name')
  console.log(user.name)
  console.log('authUser')
  console.log(authUser)
  console.log('question')
  console.log(question)
 console.log('este valor es user.avatar ', user.avatarURL); 
  

  return {
    username: user.name,
    questionId: id,
    avatarURL: user.avatarURL,
    optionOne: state.questions[id].optionOne.text,
    optionTwo: state.questions[id].optionTwo.text,
    authedUser: state.authedUser.userId,
    optionOneVotes: state.questions[id].optionOne.votes.length,
    optionTwoVotes: state.questions[id].optionTwo.votes.length,
    totalVotes:
      state.questions[id].optionOne.votes.length +
      state.questions[id].optionTwo.votes.length,
    answerId: state.users[authUser].answers[question.id],
  
  };
}

export default connect(mapStateToProps)(QuestionDetails);



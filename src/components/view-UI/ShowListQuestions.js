import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import {Button} from 'react-bootstrap'; 
import '../../App.css'; 


 function ShowListQuestions({answered, unanswered}) {

    const [isAnswered, setIsAnswered] = useState(false);

    const setToAnswered =() => {
        setIsAnswered(true);
    }
  
      const setToUnAnswered =()=>{
        setIsAnswered(false);
      }
  return <div>
  
  <div className='container'>
  <Button  className={!isAnswered?"btn active ": "btn" } variant="secondary"
  onClick={setToUnAnswered}>Unanswered Questions</Button>{'  '}
      
  <Button className= {isAnswered?"btn active": "btn"} variant="secondary"
  onClick={setToAnswered}>Answered Questions</Button>

</div>

<ul className="container listOfPoll" >
    {isAnswered && answered.map(id=> (
      
        <li key={id}>
            <Question 
            key={id} 
            id={id}/>
      
        </li>
        
    ))
    }
    {!isAnswered && unanswered.map(id=>(

      <li key={id}>  
            <Question
            key={id}
            id={id} >
            
          </Question>
        
      </li>

    ))
  }

</ul>
  </div>;
}

function mapStateToProps(state) {
    const user = state.users[state.authedUser.userId];
      // console.log(user)
    const answered = [...Object.keys(user.answers)]
        .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);
    const unanswered = [...Object.keys(state.questions)
        .filter(question => answered.indexOf(question) < 0)]
        .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);
      console.log(answered, ' ',unanswered)
    return {
        answered: answered,
        unanswered: unanswered,

    }
  }
  
  /*
  function mapStateToProps({questions, users, authedUser='johndoe'}){
    return {
        answerQuestionId:(users?.lenght && authedUser)? Object.keys(users[authedUser].answers):[]
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  
      notAnswerQuestionId:(questions?.lenght && authedUser)? Object.keys(questions):[]
        .filter((id) => Object.keys(users[authedUser].answers).indexOf(id) === -1)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    };
}
  
  */
  
  export default connect(mapStateToProps)(ShowListQuestions);

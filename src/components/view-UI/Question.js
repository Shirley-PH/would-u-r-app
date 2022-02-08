import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"; 
import {Card} from 'react-bootstrap'; 
import '../../App.css'; 

 function Question({username, optionOne, questionId }) {

   /* console.log('questionId');
    console.log(questionId); */

  return <div>
  
          <Card border="dark" style={{ width: '28rem' }} >
          <Card.Header>{username}</Card.Header>
          <Card.Body>
            
            <Card.Text>
            Would you rather {optionOne} or...?
            <br/>
             <Link variant="link" to={`/question/${questionId}`}>View this poll</Link>
            </Card.Text>
          </Card.Body>
        </Card>

    </div>;
}


function mapStateToProps(state, { id }) {
    const user = state.users[state.questions[id].author];
    
    return {
        username: user.name,
        questionId: id,
        optionOne: state.questions[id].optionOne.text
    }
}
export default connect(mapStateToProps)(Question);
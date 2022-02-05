import React from 'react';
import { connect } from 'react-redux';
import Navegation from './Navegation';

function LeaderBoard(leaderboardData) {
  return <div>
  <div>
  <Navegation />
  </div>
  {leaderboardData.leaderboardData.map((user, idx) => (
    <div key={idx}>
      
      <p>User: {user.name}</p>
      <h1 style ={{color: "red"}}>
      {idx === 0 ? 
      "WINNER!":
      "LOSER!"}
      </h1>

      <img src={user.avatarURL} alt = ""/>
      <p> Questions Answered: {user.answerCount} </p>
      <p> Questions Created: {user.questionCount}</p>
      <p>Total: {user.total}</p>
      <br/>
      <br/>
      <br/>

    </div>
  ))}
  </div>;
}

function mapStateToProps({users}){
  const leaderboardData = Object.values(users)
  
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
      
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    


  return { leaderboardData };
}

export default connect(mapStateToProps)(LeaderBoard)
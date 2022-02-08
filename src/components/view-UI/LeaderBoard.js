import React from 'react';
import { connect } from 'react-redux';
import Navegation from './Navegation';

function LeaderBoard(leaderboardData) {
  return <div>
  <div>
  <Navegation />
  </div>
  <div className='container'>
  {leaderboardData.leaderboardData.map((user, idx) => (
    <div key={idx} >
      
      <h2 className='text-decoration'>{user.name}</h2>
      <h3 style ={{color: "red"}}> <span style ={{color: "black"}}>Status: </span>
      {idx === 0 ? 
      "WINNER!":
      "LOSER!"}
      </h3>
      <div className='float-container'>
        <div className='float-child'> 
        <img className='image-avatar-leaderBoard' src={user.avatarURL} alt = "avatar-user"/>
        </div>
        <div className='float-child'>
        <p> Questions Answered: {user.answerCount} </p>
        <p> Questions Created: {user.questionCount}</p>
        <p>Total: {user.total}</p>
        </div>
      </div>
      
    </div>
    
  ))}
  </div>
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
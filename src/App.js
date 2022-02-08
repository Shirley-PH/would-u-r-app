
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { handleInitialData } from './components/actions/shared-actions';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/view-UI/Login' 
import CreateNewQuestion from './components/view-UI/CreateNewQuestion';
import LeaderBoard from './components/view-UI/LeaderBoard';
import NotFound from './components/view-UI/NotFound';
import DashBoard from './components/view-UI/DashBoard';
import QuestionDetails from './components/view-UI/QuestionDetails';


function App() {
  const dispatch= useDispatch();

      useEffect(()=> {
        dispatch(handleInitialData()); // Esto representa ala getInitialData
      }, [dispatch]
      );

  const authUser = useSelector((state) => state.authedUser)
      
  return (
    <Router>
      <Switch>
      {/* {!(authUser && authUser.userId)? 
            <Route path="/" component={Login}/>: null
          }*/}
          <Route exact path="/" render={() => <Login />} />
        <Route exact path="/add" 
      render={() => (authUser && authUser.userId ? <CreateNewQuestion /> : <Login />) } />
        <Route exact path="/404" 
        render ={() => (authUser && authUser.userId ? <NotFound /> : <Login />) } />
        <Route exact path="/leaderboard" 
        render={() => (authUser && authUser.userId ? <LeaderBoard/> : <Login/>)} />

      <Route path="/home/" render={() => (authUser && authUser.userId ? <DashBoard /> : <Login />)}  />         

       <Route
       path="/question/:id"
      render={({ match }) => {
        
        return authUser && authUser.userId ? (
          <QuestionDetails
          id={match.params.id} />
        ) : (
          <Login />
        );
      }}
    />
    <Route component={NotFound} />
    </Switch>
        </Router>
   
  );
}
 /* 
          <Route  path="/" element={<Login />} />
          {
            authedUser && authedUser.userId ? 
            <Route  path="/add" element={<CreateNewQuestion />} />:<Route element={ <Login />} />
          }
          {
            authedUser && authedUser.userId ?
            <Route  path="/404" element={<NotFound />}/>:<Route element={<Login />} />
          }
          {
            authedUser && authedUser.userId ?
            <Route  path="/leaderboard" element={<LeaderBoard/>}/>: <Route element={<Login/>} />
          }
          {
            authedUser && authedUser.userId ? 
            <Route exact path="/home/"  element={<DashBoard />} />:<Route element={<Login />} />
          }
          
          { authedUser && authedUser.userId ?
            <Route path="/questions/id:" element={ <QuestionDetails />} />:
            <Route element={< Login/>} />
          }
          <Route element={<NotFound />} /> 
        */

function mapStateToProps(state) {
  const authUser = state.authUser ? state.users[state.authUser] : null;
  return {
    authUser,
    isLoggedIn: !!authUser,
  };
}
export default connect(mapStateToProps)(App);



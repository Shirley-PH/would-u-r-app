
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

  const authedUser = useSelector((state) => state.authedUser)

  return (
    <Router>
    <Switch>
    <Route exact path="/" render={() => <Login />} />
    <Route exact path="/add" 
      render={() => (authedUser && authedUser.userId ? <CreateNewQuestion /> : <Login />) } />
    <Route exact path="/404" 
    render ={() => (authedUser && authedUser.userId ? <NotFound /> : <Login />) } />
    <Route exact path="/leaderboard" 
    render={() => (authedUser && authedUser.userId ? <LeaderBoard/> : <Login/>)} />

    <Route
      exact path="/home/"
      render={() => (authedUser && authedUser.userId ? <DashBoard /> : <Login />)}      />

    { authedUser && authedUser.userId ?
      <Route path="/questions/id:" element={ <QuestionDetails />} />:
      <Route element={< Login/>} />
    }
    <Route
       path="/question/:id"
      render={({ match }) => {
        
        return authedUser && authedUser.userId ? (
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
  const authedUser = state.autedhUser ? state.users[state.authedUser] : null;
  return {
    authedUser,
    isLoggedIn: !!authedUser,
  };
}
export default connect(mapStateToProps)(App);



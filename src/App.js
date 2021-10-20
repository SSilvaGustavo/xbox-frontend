import { Route, Switch } from 'react-router';
import './App.css';
import GuardedRoute from './components/shared/GuardedRoute/GuardedRoute';
import Header from './components/shared/Header/Header';
import ViewGame from './pages/Games/ViewGames/ViewGames';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import ViewProfile from './pages/Profile/ViewProfile/ViewProfile';
import CreateUser from './pages/User/CreateUser/CreateUser';
import "./styles/card.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/login" component={Login}/>
            <GuardedRoute path="/guarded" component={Home} />
            <GuardedRoute path="/logout" component={Logout}/>
            <GuardedRoute path="/profile/view/:id" component={ViewProfile}/>
            <GuardedRoute path="/game/view/:id" component={ViewGame}/>
            <Route path="/user/create" component={CreateUser}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;

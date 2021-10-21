import { Route, Switch } from 'react-router';
import './App.css';
import GuardedRoute from './components/shared/GuardedRoute/GuardedRoute';
import Header from './components/shared/Header/Header';
import { FavGames } from './components/structure/Game/FavGames/FavGames';
import { ProfileList } from './components/structure/Profile/ProfileList/ProfileList';
import CreateGames from './pages/Games/CreateGames/CreateGames';
import UpdateGames from './pages/Games/UpdateGames/UpdateGames';
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
            <GuardedRoute path="/logout" component={Logout}/>
            <GuardedRoute path="/guarded" component={Home} />
            <Route path="/user/create" component={CreateUser}/>
            <GuardedRoute path="/profile/view/:id" component={ViewProfile}/>
            <GuardedRoute path="/profile/favorites" component={FavGames}/>
            <GuardedRoute path="/profiles" component={ProfileList}/>
            <Route path="/game/view/:id" component={ViewGame}/>
            <GuardedRoute path="/game/update/:id" component={UpdateGames}/>
            <GuardedRoute path="/game/create" component={CreateGames}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;

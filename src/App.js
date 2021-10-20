import { Route, Switch } from 'react-router';
import './App.css';
import GuardedRoute from './components/shared/GuardedRoute/GuardedRoute';
import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
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
        </Switch>
      </div>
    </div>
  );
}

export default App;

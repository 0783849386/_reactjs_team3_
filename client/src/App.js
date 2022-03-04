import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavMenu from './components/layout/NavMenu';
import Home from './views/Home';
import LoginForm from './components/auth/LoginForm';
import UserContextProvider from './contexts/UserContext'
import UserRouter from './components/routing/UserRouter';

function App() {
  return (
    <UserContextProvider>
     <Router>
        <Switch>
        <UserRouter exact path='/' component={Home} />
        <UserRouter exact path='/login' component={LoginForm} />
        </Switch>
      </Router>
    </UserContextProvider>
    
  )
}

export default App;

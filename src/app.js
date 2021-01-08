import React from 'react';

import {Switch,Route} from 'react-router-dom'
import Home from './home';
import Login from './container/login/login'
import SignUp from './container/signup/signup'
const App = () => {
return(
  <div>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/signup' component={SignUp} />
         <Route path='/login' component={Login} />
     </Switch>
  </div>
)
}

export default App
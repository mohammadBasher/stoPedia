import React from 'react';

import {Switch,Route} from 'react-router-dom'
import Home from './home';
import Login from './container/login/login'
import Logout from './container/logout/logout'
import SignUp from './container/signup/signup'
import Editor from './container/editor/editor'
import ReadBlogs from './container/readblogs/readblogs'
const App = () => {
return(
  <div>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/signup' component={SignUp} />
         <Route path='/login' component={Login} />
         <Route path='/logout' component={Logout} />
         <Route path='/editor' component={Editor} />
         <Route path='/readblogs' component={ReadBlogs} />
     </Switch>
  </div>
)
}

export default App
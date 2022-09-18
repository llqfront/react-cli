import React , { Component} from 'react';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';
import Home from './views/Home/';
import Test from './views/Test/';
// lifecycle
class App extends Component {
    render(){
        return(
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
          </Switch>
        )
    }
}
export default App;

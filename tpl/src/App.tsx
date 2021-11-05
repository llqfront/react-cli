import React , { Component, Suspense, lazy } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
const Home = lazy(() => import('./views/Home'));

class App extends Component {
    render(){
        return(
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Redirect to="/"/>
                </Switch>
            </Suspense>
        )
    }
}
export default App;

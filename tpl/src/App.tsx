import React , { Component, Suspense, lazy } from 'react';
import {Redirect,Switch,Route} from 'react-router-dom';
const Home = lazy(() => import('./views/Home'));
const Test = lazy(() => import('./views/Test'));

class App extends Component {
    render(){
        return(
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/test" component={Test} />
                    <Redirect to="/"/>
                </Switch>
            </Suspense>
        )
    }
}
export default App;

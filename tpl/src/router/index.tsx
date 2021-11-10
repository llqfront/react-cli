import React , { Component,Suspense} from 'react';
import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
const Home = lazy(() => import('@/views/Home'));
const Test = lazy(() => import('@/views/Test'));
const Action = lazy(() => import('@/views/Action'));
const Action2 = lazy(() => import('@/views/Action2'));
class Router extends Component {
    render(){
        return(
            <React.Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/test" component={Test} />
                        <Route path="/action" component={Action} />
                        <Route path="/action2" component={Action2} />
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
            </React.Fragment>
        )
    }
}
export default Router;

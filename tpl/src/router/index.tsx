import React , { Component,Suspense} from 'react';
import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
const Home = lazy(() => import('@/views/Home'));
const Test = lazy(() => import('@/views/Test'));
const Rematch = lazy(() => import('@/views/Rematch/index.tsx'));
const Rematchfn = lazy(() => import('@/views/Rematchfn/index.tsx'));
const Tsx = lazy(() => import('@/views/Tsx/index.tsx'));
class Router extends Component {
    render(){
        return(
            <React.Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/test" component={Test} />
                        <Route path="/rematch" component={Rematch} />
                        <Route path="/rematchfn" component={Rematchfn} />
                        <Route exact path="/tsx" component={Tsx} />
                        <Route path="/tsx/:id" component={Tsx} />
                        <Route exact path="/:city" component={Home} />
                        <Route exact path="/:city/:code" component={Home} />
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
            </React.Fragment>
        )
    }
}
export default Router;

import React , { Component,Suspense} from 'react';
import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
const Home = lazy(() => import('@/views/Home'));
const Action = lazy(() => import('@/views/Action/index.tsx'));
const AjaxPage = lazy(() => import('@/views/AjaxPage/index.tsx'));
class Router extends Component {
    render(){
        return(
            <React.Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/action" component={Action} />
                        <Route path="/ajaxpage" component={AjaxPage} />
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
            </React.Fragment>
        )
    }
}
export default Router;

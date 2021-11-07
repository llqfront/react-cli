import React , { Component,Suspense} from 'react';
import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
const Home = lazy(() => import('./views/Home'));
const Test = lazy(() => import('./views/Test'));
class App extends Component {
    render(){
        return(
            <React.Fragment>
                {/*  除了Suspense 代码，不展示其他业务代码
                    <NavLink to='/'>首页</NavLink><br/>
                    <NavLink to='/test'>test</NavLink>
                    项目代码：
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/test" component={Test} />
                            <Redirect to="/"/>
                        </Switch>
                    </Suspense>
                    **/}
                <NavLink to='/'>首页</NavLink><br/>
                <NavLink to='/test'>test</NavLink>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/test" component={Test} />
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
            </React.Fragment>

        )
    }
}
export default App;

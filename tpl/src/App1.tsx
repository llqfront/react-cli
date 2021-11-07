import React , { Component} from 'react';
// import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
// const Home = lazy(() => import('./views/Home'));
// const Test = lazy(() => import('./views/Test'));
import RouterStore from './router/index.tsx'
class App extends Component {
    render(){
        return(
            <React.Fragment>
                <NavLink to='/'>首页</NavLink><br/>
                <NavLink to='/test'>test</NavLink>
                <RouterStore/>
            </React.Fragment>

        )
    }
}
export default App;




// import React , { Component, Suspense, lazy } from 'react';
// import {Redirect,Switch,Route} from 'react-router-dom';
// const Home = lazy(() => import('./views/Home'));
// const Test = lazy(() => import('./views/Test'));
//
// class App extends Component {
//     render(){
//         return(
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route exact path="/test" component={Test} />
//                     <Redirect to="/"/>
//                 </Switch>
//             </Suspense>
//         )
//     }
// }
// export default App;

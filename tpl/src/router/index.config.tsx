// 如果项目过大，可拆分，一般项目用不上
import React , { Component, Suspense } from 'react';
import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
// privateRouters
// pageRouters
// mainRouters
// userRouters
// appRouters
// activityRouters
// 一级页面路由
const pageRouters:Array<any> = [
    {
        path:'/',
        exact:true,
        component:lazy(() => import('@/views/Home')),
    },
    {
        path:'/test',
        exact:false,
        component:lazy(() => import('@/views/Test')),
    },
];
// 用户中心路由
const userRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// 私有路由
const privateRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// app中的前端页面路由
const appRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// 活动页面路由
const activityRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// 无header 无footer 模块路由
const mainRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
const router = [
    ...pageRouters,
    ...userRouters,
    ...privateRouters,
    ...appRouters,
    ...activityRouters,
    ...mainRouters
]
export default ()=>{
    const newRouter = router.map((item,index)=>(
        <Route
        key={index}
        exact={item.exact}
        path={item.path}
        component={item.component} />
    ))
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {newRouter}
            </Switch>
        </Suspense>
    )
}

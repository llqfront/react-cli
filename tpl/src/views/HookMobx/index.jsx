import React, {useState,useEffect} from 'react';

import { withRouter} from 'react-router-dom';

import {observer,MobXProviderContext} from 'mobx-react';
// @withRouter
// @inject('FirstStore')
// @observer
function useStores(name) {
    return React.useContext(MobXProviderContext)[name]
}
const View = (props)=>{
    const { tradeCfg } =  useStores('test');
    // const { name } =  useStores('SecondStore');

    // const { aaa,bbb } =  useStores('SecondStore');
    // const { aaa,bbb } =  useStores('SecondStore');
    return(
        <div>
            <h3>这是函数组件test</h3>
            {tradeCfg.name}<br/>
        </div>
    )
}

export default withRouter(observer(View));





//

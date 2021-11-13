import React , { Component } from 'react';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';

import {observer,inject} from 'mobx-react';
// 导入需要的模块
@withRouter
@inject('first','test')
@observer
class View extends Component {
    test = ()=>{
        this.props.test.setName('111')
    }
    render(){
        console.log(this.props.first)
        return (
            <React.Fragment>
                <div className="mian">这是event面</div>
                <NavLink to="/">首页</NavLink><br/>
                <NavLink to="/input">表单</NavLink><br/>
                <NavLink to="/event">事件</NavLink>
                <input type="button" value="test" onClick={this.test}/>
            </React.Fragment>
        )
    }
}
export default View;

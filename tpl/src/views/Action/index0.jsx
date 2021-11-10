import React , { Component } from 'react';
import {connect} from 'react-redux';

import {actions} from './_index.js';

class View extends Component {
    // changeName(){
    //
    // }
    render(){
        console.log(this.props.addList)
        const {addList,onAddFn} = this.props;
        return (
            <React.Fragment>
                {addList.length}<br/>
                action页面<br/>
                {/*<input type="button"
                value="点我"
                onClick={onAddFn}
                />*/}
                <input type="button"
                value="点我"
                onClick={()=>{onAddFn()}}
                />
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    // this.props.addList
    // {
    //     add:[],
    //     del:[]
    // }
    return {
        addList:state.add
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    // ownProps 父组件有任意参数 
    // const {name} = ownProps;
    // this.props.name
    // {
    //     type:'ADD_TODO'
    // }
    // dispatch(actions.add())
    return {
        onAddFn:()=>dispatch(actions.add())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(View);

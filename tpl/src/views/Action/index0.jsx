import React , { Component } from 'react';
import {connect} from 'react-redux';

import {AddActions} from '@/stores/Actions.ts';
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
        addList:state.addReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    // ownProps 父组件有任意参数
    // const {name} = ownProps;
    // this.props.name
    // {
    //     type:'ADD_TODO'
    // }
    // dispatch(AddActions.add())
    return {
        onAddFn:()=>dispatch(AddActions.add())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(View);

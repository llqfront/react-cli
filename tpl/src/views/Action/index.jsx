import React , { Component } from 'react';
import {connect} from 'react-redux';

import { helpers } from '@/utils';
import { actionAdd } from '@/actions';

class View extends Component {
    // changeName(){
    //
    // }
    onAddFn = ()=>{
        const {dispatch} = this.props;
        dispatch(helpers.createAction(
            actionAdd.FETCH_USER
        ))
    }
    render(){
        const {addList} = this.props;
        return (
            <React.Fragment>
                action页面<br/>
                {/*<input type="button"
                value="点我"
                onClick={onAddFn}
                />*/}
                <input type="button"
                value="点我"
                onClick={this.onAddFn}
                />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state)=> {
    console.log(state)
    return {
        addList:state.add.payload
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onAddFn:()=>dispatch(actionAdd.add())
//     }
// };
export default connect(mapStateToProps,null)(View);

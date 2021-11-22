import React , { Component } from 'react';
import { connect } from 'react-redux';

import { helpers } from '@/utils';
import { actionOld } from '@/actions';

class View extends Component {
    onAddFn = () => {
        const {dispatch} = this.props;
        dispatch(
            helpers.createAction(
                actionOld.ADD_TODO
            )
        )
    }
    render(){
        return (
            <React.Fragment>
                action页面<br/>
                <input type="button"
                value="点我"
                onClick={this.onAddFn}
                />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        addList:state
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onAddFn:()=>dispatch(actionsAdd.add())
//     }
// };
export default connect(mapStateToProps,null)(View);

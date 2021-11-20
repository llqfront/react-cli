import React , { Component } from 'react';
import {connect} from 'react-redux';

import {actionAdd} from '@/actions';

class View extends Component {
    // changeName(){
    //
    // }
    onAddFn = ()=>{
        const {dispatch} = this.props;
        dispatch(actionAdd.add(
            'app/testAdd'
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
function mapStateToProps(state) {
    console.log(state)
    return {
        addList:state.addReducer
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onAddFn:()=>dispatch(actionAdd.add())
//     }
// };
export default connect(mapStateToProps,null)(View);

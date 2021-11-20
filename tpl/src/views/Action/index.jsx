import React , { Component } from 'react';
import {connect} from 'react-redux';

import {actionAdd} from '@/actions';

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
    return {
        addList:state.addReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddFn:()=>dispatch(actionAdd.add())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(View);

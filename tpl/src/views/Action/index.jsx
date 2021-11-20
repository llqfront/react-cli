import React , { Component } from 'react';
import {connect} from 'react-redux';

import {actionsAdd} from '@/stores/Actions.ts';

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
        onAddFn:()=>dispatch(actionsAdd.add())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(View);

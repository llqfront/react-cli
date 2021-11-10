import React , { Component } from 'react';
import { connect } from 'react-redux';
import {actionsAdd} from '@/stores/Actions.ts';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';
import Item from './item.jsx';
class View extends Component {
    // changeName(){
    //
    // }
    onAddFn(){
        const {dispatch,addList} = this.props;
        console.log(addList.length)
        dispatch(actionsAdd.add(addList.length))
    }
    lists(){
        const { addList } = this.props;
        return addList.map((val,index)=>{
            return(
                <Item key={index} id={val.id} val={val}/>
            )
        })
    }
    render(){
        console.log(this.props.addList)
        const {addList,onAddFn,dispatch} = this.props;
        return (
            <React.Fragment>
                {addList.length}<br/>
                action页面<br/>
                {/*<input type="button"
                value="点我"
                onClick={onAddFn}
                />*/}
                <NavLink to="/">首页</NavLink>
                <NavLink to="/action">action</NavLink>
                <input type="button"
                value="点我"
                onClick={()=>{this.onAddFn()}}
                />
                {
                    addList.length!==0
                    ?
                    <ul>{this.lists()}</ul>
                    :
                    ''
                }
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
// const mapDispatchToProps = (dispatch, ownProps) => {
//     // {
//     //     type:'ADD_TODO'
//     // }
//     // dispatch(actionsAdd.add())
//     return {
//         onAddFn:()=>dispatch(actionsAdd.add())
//     }
// };
export default connect(mapStateToProps,null)(View);

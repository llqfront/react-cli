import React, { Component } from 'react';
import {connect} from 'react-redux';
import { helpers } from '@/utils';
import { actionAjaxPage } from '@/actions';
import Unit from '@/utils/ajax.ts'
class View extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    handleCallback(){
        const {dispatch} = this.props;
        const ajaxCfg = {
            url:'/home/mediareports',
            cfg:{
                page_number:1,
                page_size:10,
            },
            headers:{}
        }
        Unit.getApi(ajaxCfg).then((res)=>{
            dispatch(
                helpers.createAction(actionAjaxPage.PDDDATA,res.data)
            )
        })
    }
    pageGetPdd(){
        const {dispatch} = this.props;
        dispatch(
            helpers.createAction(actionAjaxPage.GETPDD,{},this.handleCallback())
        )
    }
    componentDidMount(){
        this.pageGetPdd()
    }
    lists(data){
        return data.map((val,index)=>{
            return(
                <li key={val.id}>
                {val.id}
                </li>
            )
        })
    }
    render(){
        // const {pddData} = this.props;
        return(
            <div>
            {/*
                pddData.length!==0
                ?
                <ul>{this.lists(pddData.data.data)}</ul>
                :
                ''
            */}
            asdfasdf
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
    return {
        // pddData:state.pddReducer
    }
}
export default connect(mapStateToProps,null)(View);

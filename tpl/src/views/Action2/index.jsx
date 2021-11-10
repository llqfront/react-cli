import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {actions} from '../Action/_index';
const View = (props)=>{
    const state = useSelector((state)=>state);
    const add = useSelector((state)=>state.add);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.add())
        // dispatch({
        //     type:"ADD_TODO"
        // })
    },[])
    return(
        <div>{add.length}</div>
    )
}
export default View;

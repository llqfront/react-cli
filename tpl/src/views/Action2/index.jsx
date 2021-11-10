import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {AddActions} from '@/stores/Actions.ts';
const View = (props)=>{
    const state = useSelector((state)=>state);
    const add = useSelector((state)=>state.addReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(AddActions.add())
        // dispatch({
        //     type:"ADD_TODO"
        // })
    },[])
    return(
        <div>{add.length}</div>
    )
}
export default View;

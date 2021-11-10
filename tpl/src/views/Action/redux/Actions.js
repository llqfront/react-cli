import * as ActionTypes from './ActionTypes';
// import {a,b,c,d} from './ActionTypes';
// ActionTypes.a
// ActionTypes.b
// ActionTypes.c
// {
//     type:ActionTypes.ADD_TODO,
//     text:'第一个demo'
// }
export const add = (_id) =>{
    return{
        type:ActionTypes.ADD_TODO,
        text:'第一个demo',
        id:_id++
    }
}
export const del = (text,id)=>{
    return {
        type:ActionTypes.DEL_TODO,
        text:text,
        id:id
    }
}

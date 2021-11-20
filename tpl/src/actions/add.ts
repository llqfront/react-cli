const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';
const EDIT_TODO = 'EDIT_TODO';

export const add = () =>{
    return{
        type:ADD_TODO,
        text:'第一个demo',
    }
}

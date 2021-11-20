const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';
const EDIT_TODO = 'EDIT_TODO';
export default (state = {},action)=>{
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                ...action
            }
        case DEL_TODO:
            return state
        default:
            return state;
    }
}

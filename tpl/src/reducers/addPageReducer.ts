const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';
const EDIT_TODO = 'EDIT_TODO';
export default (state=[],action)=>{
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    type:action.type,
                    text:action.text,
                    id:action.id
                },
                ...state
            ]
        case DEL_TODO:
            return state.filter((item)=>{
                return item.id !== action.id;
            })
        default:
            return state;
    }
}

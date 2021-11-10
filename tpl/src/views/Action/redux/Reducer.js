import * as ActionTypes from './ActionTypes';

export default (state=[],action)=>{
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                {
                    type:action.type,
                    text:action.text,
                    id:action.id
                },
                ...state
            ]
        case ActionTypes.DEL_TODO:
            return state.filter((item)=>{
                return item.id !== action.id;
            })
        default:
            return state;
    }

}

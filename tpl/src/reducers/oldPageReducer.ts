import { actionOld } from '@/actions';

export default (state=[],action)=>{
    switch (action.type) {
        case actionOld.ADD_TODO:
            return [
                {
                    type:action.type,
                    text:action.type
                },
                ...state
            ]
        default:
            return state;
    }

}

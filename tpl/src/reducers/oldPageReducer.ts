import { actionOld } from '@/actions';

export default (state={},action)=>{
    switch (action.type) {
        case actionOld.ADD_TODO:
            return {
                data:action.payload,
                ...state
            }
        default:
            return state;
    }

}

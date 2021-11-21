import { actionAdd } from '@/actions';


export default (state = {},action)=>{
    switch (action.type) {
        case actionAdd.ADD_TODO:
            return {
                ...state,
                ...action
            }
        default:
            return state;
    }
}

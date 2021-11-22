import { actionAjaxPage } from '@/actions';

export default (state = {}, action)=>{
    switch (action.type) {
        case actionAjaxPage.PDDDATA:
            return {
                ...state,
                action
            };
        default:
            return state;
    }

}

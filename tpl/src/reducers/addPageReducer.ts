import { actionAdd } from '@/actions';


export default (state = {},action)=>{
    switch (action.type) {
      case actionAdd.FETCH_USER_FULFILLED:
        return {
          ...state,
          success:action.payload
        };
      default:
        return state;
    }
}

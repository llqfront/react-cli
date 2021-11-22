import { actionAdd } from '@/actions';


export default (state = {},action)=>{
    switch (action.type) {
      case actionAdd.FETCH_USER_FULFILLED:
        return {
          ...state,
          // `login` is the username
          [action.payload.login]: action.payload
        };
      default:
        return state;
    }
}

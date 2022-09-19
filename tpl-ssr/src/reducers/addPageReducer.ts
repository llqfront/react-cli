import { actionAdd } from '@/actions';


export default ( state = {}, action:any ) => {
    switch ( action.type ) {
      case actionAdd.FETCH_USER:
        return {
          ...state,
          success:action.payload
        };
      default:
        return state;
    }
}

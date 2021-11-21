import { Epic,ofType } from 'redux-observable';

import { endWith, map, mergeMap, startWidth, switchMap } from 'rxjs/operators';

import { actionAdd } from '@/actions';

export const testAdd = (action$, state$) => {
    return action$.pipe(
        ofType(actionAdd.ADD_TODO),
        mergeMap((action) =>{
          // epic(action$, state$))
          // console.log(action)
        })
      // mergeMap(epic => epic(action$, state$))
    );
}

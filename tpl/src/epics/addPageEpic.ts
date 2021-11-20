import { Epic,ofType } from 'redux-observable';

import { endWith, map, mergeMap, startWidth, switchMap } from 'rxjs/operators';


export const testAdd = (action$, state$) => {
    return action$.pipe(
        ofType('app/testAdd'),
        mergeMap((action) =>{
          // epic(action$, state$))
          // console.log(action)
        })
      // mergeMap(epic => epic(action$, state$))
    );
}

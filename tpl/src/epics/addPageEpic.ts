import { Epic,ofTypes } from 'redux-observable';

import { endWith, map, mergeMap, startWidth, switchMap } from 'rxjs/operators';


export const testAdd = (action$, state$) => {
    return action$.pipe(
      mergeMap((action) =>{
          // epic(action$, state$))
          console.log(action)
      })
      // mergeMap(epic => epic(action$, state$))
    );
}

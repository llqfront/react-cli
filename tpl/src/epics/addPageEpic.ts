import { Epic,ofTypes } from 'redux-observable';

import { endWith, map, mergeMap, startWidth, switchMap } from 'rxjs/operators';


export const testAdd = (action$, state$) => {
    return epic$.pipe(
      // mergeMap((action) =>{
      //     // epic(action$, state$))
      //     console.log(actions)
      // })
      mergeMap(epic => epic(action$, state$))
    );
}

import { Epic,ofType } from 'redux-observable';

import { endWith, map, mergeMap, startWidth, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { actionAdd } from '@/actions';
import { helpers } from '@/utils';

export const fetchUserEpic = (action$, state$) => {
    return action$.pipe(
        // 第一个解释器
        ofType(actionAdd.FETCH_USER),
        mergeMap((action) =>{
            return ajax({
              url: '/home/mediareports?page_number=1&page_size=20',
              method: 'GET',
              headers: {
              }
            }).pipe(map(res => {
                  console.log(res.response)
                  // 真下的ajax 请求后的结果
                  // 一定要return 
                  return helpers.createAction(actionAdd.FETCH_USER_FULFILLED,res.response)
              })
            )
        })
    );
}

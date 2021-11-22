import { Epic,ofType } from 'redux-observable';

import { endWith, map, mergeMap, startWidth, switchMa,filter, mapTo } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { actionAdd } from '@/actions';
import { helpers } from '@/utils';

export const testAdd = (action$, state$) => {
    return action$.pipe(
        // 第一个解法器
        ofType(actionAdd.FETCH_USER),
        mergeMap((action) =>{
            return ajax({
              url: '/home/mediareports?page_number=1&page_size=20',
              method: 'GET',
              headers: {
              }
          }).pipe(
              map(res => {
                  // 真下的ajax 请求后的结果
                  helpers.createAction(actionAdd.FETCH_USER_FULFILLED,res.response)
              })
            )
        })
    );
}

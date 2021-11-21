import { Epic,ofType } from 'redux-observable';

import { endWith, map, mergeMap, startWidth, switchMap } from 'rxjs/operators';
import unit from '@/utils/ajax.ts';

import { actionAdd } from '@/actions';
import axios from 'axios';

export const testAdd = (action$, state$) => {
    return action$.pipe(
        ofType('app/testAdd'),
        mergeMap((action) =>{
          // epic(action$, state$))
          // console.log(action)
          // return axios.get(
          // '/home/mediareports',
          // {
          //     params:{
          //         page_number:1,
          //         page_size:20
          //     }
          // },
          // {
          //     headers: {},
          // }).pipe(
          //     map((res)=>{
          //         console.log(res)
          //     })
          // )
          return action;

        })
      // mergeMap(epic => epic(action$, state$))
    );
}

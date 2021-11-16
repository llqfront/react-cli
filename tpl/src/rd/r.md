1、安装
2、导入
    import { init, dispatch, getState } from '@rematch/core'
3、const store = init()
4、



import { init, dispatch, getState } from '@rematch/core'
import { models , RootModel} from '@/models';
import immerPlugin from '@rematch/immer';

export const store = init({
  models,
  plugins:[immerPlugin()]
})
export type Store = typeof store;
export type RootState = RematchRootState<RootModel>
export type Dispatch = RematchDispatch<RootModel>
// export const getState = store.getState as ()=>RootState
// export const dispatch = store.dispatch as Dispatch
export {dispatch,getState}
// export default store;

//models /index.ts
import { Models } from '@rematch/core'

import { app } from './app.model.ts';
// import { app } from './app.model.ts';

export interface RootModel extends Models<RootModel>{
    app:typeof app
    // auth:typeof auth
}

export const models:RootModel = {
    app,
    // auth
}

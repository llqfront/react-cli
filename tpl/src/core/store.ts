import { init,
    RematchDispatch,
    RematchRootState
 } from '@rematch/core'
// import * as models from '@/models'
import { models , RootModel} from '@/models';
import immerPlugin from '@rematch/immer';

export const store = init({
  models,
  plugins:[immerPlugin()]
})
export type Store = typeof store;
export type RootState = RematchRootState<RootModel>
export type Dispatch = RematchDispatch<RootModel>
export const getState = store.getState as ()=>RootState
export const dispatch = store.dispatch as Dispatch
// export default store;

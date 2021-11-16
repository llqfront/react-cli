import { init } from '@rematch/core'
import { models } from '@/models'
import immerPlugin from '@rematch/immer'
// import * as models from '@/models'
// const immer = immerPlugin();
export const store = init({
  models,
  // plugins: [immer]
  plugins: [immerPlugin()]
})

// export default store;

//
// import { init, dispatch, getState } from '@rematch/core'
// import { models , RootModel} from '@/models';
// import immerPlugin from '@rematch/immer';
//
// export const store = init({
//   models,
//   plugins:[immerPlugin()]
// })
// export type Store = typeof store;
// export type RootState = RematchRootState<RootModel>
// export type Dispatch = RematchDispatch<RootModel>
// // export const getState = store.getState as ()=>RootState
// // export const dispatch = store.dispatch as Dispatch
// export {dispatch,getState}
// // export default store;

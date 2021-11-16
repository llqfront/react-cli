import { init } from '@rematch/core'
import { models } from '@/models'
// import * as models from '@/models'

export const store = init({
  models,
})

// export default store;

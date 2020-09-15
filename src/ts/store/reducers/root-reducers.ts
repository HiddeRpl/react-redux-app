import { combineReducers, Reducer } from 'redux'
import empty from '@store/reducers/empty-reducers'

// export interface RootState {
// }

export type RootState = any

const rootReducer: Reducer<RootState> = combineReducers({
  empty,
})

export default rootReducer

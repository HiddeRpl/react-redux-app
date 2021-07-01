import { combineReducers, Reducer } from 'redux'
import emptyState, { EmptyState } from '@store/reducers/empty-reducers'

export interface RootState {
  emptyState: EmptyState
}

const rootReducer: Reducer<RootState> = combineReducers({
  emptyState,
})

export default rootReducer

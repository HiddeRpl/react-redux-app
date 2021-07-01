import { EmptyActionsTypes, EmptyActionTypesKeys } from '@store/action-types/empty-action-types'

export interface EmptyState {
  isEmpty: boolean
}

const initialState: EmptyState = {
  isEmpty: true,
}

const authState = (state: EmptyState = initialState, action: EmptyActionsTypes): EmptyState => {
  switch (action.type) {
    case EmptyActionTypesKeys.SET_EMPTY_STATUS:
      return { ...state, isEmpty: action.payload }
    default:
      return state
  }
}

export default authState

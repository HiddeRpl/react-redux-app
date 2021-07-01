import { EmptyActionTypesKeys, SetEmptyStatusAction } from '@store/action-types/empty-action-types'

export function setEmptyStatus(isEmpty: boolean): SetEmptyStatusAction {
  return { type: EmptyActionTypesKeys.SET_EMPTY_STATUS, payload: isEmpty }
}

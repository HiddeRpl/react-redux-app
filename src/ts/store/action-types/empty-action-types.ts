export enum EmptyActionTypesKeys {
  SET_EMPTY_STATUS = 'SET_EMPTY_STATUS',
}

export interface SetEmptyStatusAction {
  type: EmptyActionTypesKeys.SET_EMPTY_STATUS
  payload: boolean
}

export type EmptyActionsTypes = SetEmptyStatusAction

import { Action } from 'redux';

import { Theme } from '../constants/themes';
import { Identity } from '../modules/auth/types';

export type Actions = ChangeTheme | SetIdentity | UnsetIdentity;

export enum ActionType {
  CHANGE_THEME,
  SET_IDENTITY,
  UNSET_IDENTITY,
}

class ChangeTheme implements Action<ActionType> {
  public readonly type = ActionType.CHANGE_THEME;
  constructor(public theme: Theme) {}
}

export function changeTheme(theme: Theme): Action {
  return { ...new ChangeTheme(theme) };
}

class SetIdentity implements Action<ActionType> {
  public readonly type = ActionType.SET_IDENTITY;
  constructor(public identity: Identity) {}
}

export function setIdentity(identity: Identity): Action {
  return { ...new SetIdentity(identity) };
}

class UnsetIdentity implements Action<ActionType> {
  public readonly type = ActionType.UNSET_IDENTITY;
}

export function unsetIdentity(): Action {
  return { ...new UnsetIdentity() };
}

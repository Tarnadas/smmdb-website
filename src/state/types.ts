import { Action } from 'redux';

import { Theme } from '../constants/themes';
import { Identity } from '../modules/auth/types';

export interface State {
  theme: Theme;
  identity?: Identity;
}

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

export class SetIdentity implements Action<ActionType> {
  public readonly type = ActionType.SET_IDENTITY;
  constructor(public identity: Identity) {}
}

class UnsetIdentity implements Action<ActionType> {
  public readonly type = ActionType.UNSET_IDENTITY;
  constructor() {}
}

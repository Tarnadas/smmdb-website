import { Action } from 'redux';

import { Theme } from '../constants/themes';

export interface State {
  theme: Theme;
}

export type Actions = ChangeTheme;

export enum ActionType {
  CHANGE_THEME,
}

class ChangeTheme implements Action<ActionType> {
  public readonly type = ActionType.CHANGE_THEME;
  constructor(public theme: Theme) {}
}

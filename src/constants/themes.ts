/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/explicit-member-accessibility */
const COLOR_BROWN = '#611821';
const COLOR_GREEN = '#009784';
const COLOR_LIGHT_GREEN = '#90f0e5';
const COLOR_LIGHT_YELLOW = '#fef3d3';
const COLOR_LIGHT_LIGHT_YELLOW = '#fffdee';
const COLOR_YELLOW = '#ffcf00';

export type Themes = DefaultTheme;

export interface Theme {
  background: string;
}

export class DefaultTheme implements Readonly<Theme> {
  background = COLOR_YELLOW;
}
/* eslint-enable */

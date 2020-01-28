/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/explicit-member-accessibility */
const COLOR_BROWN = '#611821';
const COLOR_GREEN = '#009784';
const COLOR_LIGHT_GREEN = '#90f0e5';
const COLOR_LIGHT_YELLOW = '#fef3d3';
const COLOR_LIGHT_LIGHT_YELLOW = '#fffdee';
const COLOR_YELLOW = '#ffcf00';
const COLOR_GRAY = '#666';

export type Themes = DefaultTheme;

export interface Theme {
  colorPrimary: string;
  colorSecondary: string;
  background: string;
  backgroundHeader: string;
  backgroundGray: string;
}

export class DefaultTheme implements Readonly<Theme> {
  colorPrimary = COLOR_LIGHT_YELLOW;
  colorSecondary = COLOR_BROWN;
  background = COLOR_GREEN;
  backgroundHeader = COLOR_YELLOW;
  backgroundGray = COLOR_GRAY;
}
/* eslint-enable */

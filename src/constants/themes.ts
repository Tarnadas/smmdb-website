export type Themes = DefaultTheme;

export interface Theme {
  background: string;
}

/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export class DefaultTheme implements Readonly<Theme> {
  background = '#ffcf00';
}
/* eslint-enable */

import React from 'react';
import { styled } from 'linaria/react';

import { Panel } from '../../components/panel';

import { NavigationButton } from './NavigationButton';

const StyledNavigation = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const StyledPanel = styled(({ children, className, style }: any) => (
  <Panel className={className} style={style}>
    {children}
  </Panel>
))`
  flex: 1 0 auto;

  > *:not(:first-child) {
    margin-left: 0.3rem;
  }

  > *:not(:last-child) {
    margin-right: 0.3rem;
  }
`;

export const Navigation: React.FunctionComponent = () => (
  <StyledNavigation>
    <StyledPanel>
      <NavigationButton href="/">Home</NavigationButton>
      <NavigationButton href="/courses">Courses</NavigationButton>
    </StyledPanel>
  </StyledNavigation>
);

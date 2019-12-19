import React from 'react';
import { styled } from 'linaria/react';

import Panel from '../../components/panel/Panel';

import NavigationButton from './NavigationButton';

const StyledNavigation = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const Navigation: React.FunctionComponent = () => (
  <StyledNavigation>
    <Panel>
      <NavigationButton href="/">Home</NavigationButton>
      <NavigationButton href="/courses">Courses</NavigationButton>
    </Panel>
  </StyledNavigation>
);

export default Navigation;

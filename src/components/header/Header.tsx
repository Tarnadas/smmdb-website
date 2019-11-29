import React from 'react';
import Headroom from 'react-headroom';
import { styled } from 'linaria/react';

import Navigation from '../../modules/navigation/Navigation';

const StyledHeader = styled(Headroom)`
  flex: 0 0 3rem;
`;

const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <div>SMMDB</div>
    <Navigation />
  </StyledHeader>
);

export default Header;

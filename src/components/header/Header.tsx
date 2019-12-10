import React from 'react';
import Headroom from 'react-headroom';
import { styled } from 'linaria/react';
import { useRouter } from 'next/router';

import LoginButton from '../../modules/auth/LoginButton';
import Navigation from '../../modules/navigation/Navigation';
import { getTitle } from '../../constants/seo';

const StyledHeader = styled(Headroom)`
  flex: 0 0 3rem;

  > * {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const Title = styled.div`
  font-size: 2rem;
`;

const LoginButtonWrapper = styled.div`
  justify-self: flex-end;
`;

const Header: React.FunctionComponent = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <Title>{getTitle(router.pathname)}</Title>
      <Navigation />
      <LoginButtonWrapper>
        <LoginButton />
      </LoginButtonWrapper>
    </StyledHeader>
  );
};

export default Header;

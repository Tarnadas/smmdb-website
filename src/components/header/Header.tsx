import React from 'react';
import Headroom from 'react-headroom';
import { styled } from 'linaria/react';
import { useRouter } from 'next/router';

import { LoginButton } from '../../modules/auth';
import { Navigation } from '../../modules/navigation';
import { getTitle } from '../../constants/seo';
import { Theme } from '../../constants/themes';
import { useReduxState } from '../../state';

interface StyledHeaderProps {
  theme: Theme;
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 0 0 6rem;
  background-color: ${({ theme }: StyledHeaderProps) => theme.backgroundHeader};
`;

const StyledHeader = styled(Headroom)`
  flex: 1 0 auto;
  background-color: ${({ theme }: StyledHeaderProps) => theme.backgroundHeader};

  > * {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const LoginButtonWrapper = styled.div`
  justify-self: flex-end;
  margin: 0 0.5rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
  padding: 0.2rem 20%;
  display: flex;
  justify-content: flex-start;
`;

export const Header: React.FunctionComponent = () => {
  const theme = useReduxState(state => state.theme);
  const router = useRouter();
  return (
    <HeaderWrapper theme={theme}>
      <StyledHeader theme={theme}>
        <Navigation />
        <LoginButtonWrapper>
          <LoginButton />
        </LoginButtonWrapper>
      </StyledHeader>
      <Title>{getTitle(router.pathname)}</Title>
    </HeaderWrapper>
  );
};

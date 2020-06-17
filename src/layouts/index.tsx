import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from 'linaria/react';

import { Header } from '../components/header';
import { fontSize } from '../constants/styles';
import { Theme } from '../constants/themes';
import { useReduxState } from '../state';

interface LayoutProps {
  theme: Theme;
}

const Layout = styled.div`
  /* stylelint-disable selector-pseudo-class-no-unknown,property-no-vendor-prefix */
  :global() {
    @font-face {
      font-family: SuperMarioMakerExtended;
      src: url(/fonts/smme.woff) format('woff'),
        url(/fonts/smme.ttf) format('truetype');
    }

    html {
      font-size: ${fontSize}px;
      overflow: hidden;
      font-family: SuperMarioMakerExtended, Roboto, arial, sans-serif;
    }

    html,
    body,
    div#__next {
      min-width: 100vw;
      min-height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      margin: 0;
      padding: 0;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      background-color: #24997e;
    }
    div::-webkit-scrollbar {
      width: 8px;
      background-color: #24997e;
    }
    div::-webkit-scrollbar-thumb {
      border-radius: 6px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #555;
    }

    * {
      box-sizing: border-box;
    }
  }
  /* stylelint-enable */

  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background-color: ${({ theme }: LayoutProps) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Body = styled.div`
  flex: 1 1 auto;
  overflow: auto;
`;

const Footer = styled.div`
  flex: 0 0 3rem;
`;

const IndexLayout: React.FunctionComponent = ({ children }) => {
  const theme = useReduxState(state => state.theme);
  return (
    <Layout theme={theme}>
      <Helmet>
        <title>SMMDB</title>
        <meta
          name="description"
          content="Super Mario Maker, Super Mario Maker 2 and Super Mario 64 Maker course database for consoles Switch, Wii U, 3DS and emulators Yuzu, Cemu, Citra and decaf."
        />
      </Helmet>
      <Header />
      <Body>{children}</Body>
      <Footer></Footer>
    </Layout>
  );
};

export default IndexLayout;

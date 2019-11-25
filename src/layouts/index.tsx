import React from 'react';
import { styled } from 'linaria/react';

import { fontSize } from '../constants/styles';

const Layout = styled.div`
  /* stylelint-disable selector-pseudo-class-no-unknown,property-no-vendor-prefix */
  :global() {
    @font-face {
      font-family: SuperMarioMakerExtended;
      src: url(/fonts/smme.woff) format('woff'),
        url(/fonts/smme.ttf) format('truetype');
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    html {
      font-size: ${fontSize}px;
      background-color: #ffcf00;
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

  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

const IndexLayout: React.SFC = props => <Layout>{props.children}</Layout>;

export default IndexLayout;

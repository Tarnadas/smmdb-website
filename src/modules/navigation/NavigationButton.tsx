import React from 'react';
import { styled } from 'linaria/react';
import Link from 'next/link';

import { Panel } from '../../components/panel';

interface NavigationButtonProps {
  href: string;
}

const StyledPanel = styled.div`
  padding: 0.2rem 0.4rem;
`;

export const NavigationButton: React.FunctionComponent<NavigationButtonProps> = ({
  children,
  href,
}) => (
  <Link href={href}>
    <a>
      <Panel>
        <StyledPanel>{children}</StyledPanel>
      </Panel>
    </a>
  </Link>
);

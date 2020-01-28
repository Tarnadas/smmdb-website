import React from 'react';
import { styled, CSSProperties } from 'linaria/react';

import { Theme } from '../../constants/themes';

interface PanelProps {
  style?: CSSProperties;
  className?: string;
}

interface StyledHeaderProps {
  theme: Theme;
}

const StyledPanel = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.4rem;
  border: 3px solid rgba(255, 255, 255, 0.6);
  padding: 0.3rem;
`;

export const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <StyledPanel className={className} style={style}>
      {children}
    </StyledPanel>
  );
};

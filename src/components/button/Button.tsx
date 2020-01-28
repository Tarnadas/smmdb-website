import React, { HTMLAttributes } from 'react';
import { styled } from 'linaria/react';

import { useReduxState } from '../../state';
import { Theme } from '../../constants/themes';
import { ProgressSpinner } from '../progress-spinner';

interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  iconSrc?: string;
}

const height = 2.5;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.15rem;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 1px 4px 13px 0 rgba(0, 0, 0, 0.5);
  height: ${height}rem;
  position: relative;

  background-color: ${({ disabled, theme }: StyledButtonProps) =>
    disabled ? theme.backgroundGray : theme.colorPrimary};
`;

interface IStyledButtonProps {
  disabled: boolean;
  theme: Theme;
}

type StyledButtonProps = IStyledButtonProps & HTMLAttributes<HTMLButtonElement>;

const StyledIcon = styled.img`
  height: 100%;
  padding: 0.2rem;
  padding-right: 0.6rem;
`;

const StyledContent = styled.span`
  font-family: SuperMarioMakerExtended, Roboto, arial, sans-serif;
  margin: 0 0.4rem;
`;

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled = false,
  iconSrc,
  loading = false,
  onClick,
}) => {
  const theme = useReduxState(state => state.theme);
  return (
    <StyledButton onClick={onClick} disabled={disabled} theme={theme}>
      {iconSrc && <StyledIcon src={iconSrc} />}
      {loading && <ProgressSpinner size={height} />}
      <StyledContent>{children}</StyledContent>
    </StyledButton>
  );
};

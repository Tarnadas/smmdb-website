import React from 'react';
import { styled } from 'linaria/react';

interface ProgressSpinnerProps {
  size?: number;
  inline?: boolean;
}

const StyledSpinner = styled.div`
  width: ${({ size }: ProgressSpinnerProps) => (size ? `${size}rem` : '4rem')};
  height: ${({ size }: ProgressSpinnerProps) => (size ? `${size}rem` : '4rem')};
  border-radius: 50%;
  border: 7px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.6);
  animation: rotate 800ms linear infinite;

  /* stylelint-disable selector-pseudo-class-no-unknown */
  :global() {
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const StyledSpinnerWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

interface StyledSpinnerWrapperProps {
  inline: boolean;
}

export const ProgressSpinner: React.FunctionComponent<ProgressSpinnerProps> = ({
  // inline = false,
  size,
}) => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner size={size} />
    </StyledSpinnerWrapper>
  );
};

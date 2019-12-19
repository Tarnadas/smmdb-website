import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { styled } from 'linaria/react';

import { SetIdentity } from '../../state/types';

import { Identity } from './types';

const StyledLoginButton = styled.div``;

const LoginButton: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch(`${process.env.API_DOMAIN}/login`, {
          method: 'POST',
          credentials: 'include',
        });
        if (!response.ok) throw new Error(response.statusText);
        const identity: Identity = await response.json();
        console.log(identity);
        dispatch(new SetIdentity(identity));
      } catch (err) {
        // ignore
      }
    };
    login();
  });

  const onSuccess = (...a: any) => {
    console.log(a);
  };

  const onFailure = () => {};

  return (
    <StyledLoginButton>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </StyledLoginButton>
  );
};

export default LoginButton;

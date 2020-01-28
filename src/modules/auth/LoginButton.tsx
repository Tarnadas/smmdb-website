import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { styled } from 'linaria/react';

import { setIdentity, unsetIdentity, useReduxState } from '../../state';
import { Button } from '../../components/button';

import { Identity } from './types';

const StyledLoginButton = styled.div``;

export const LoginButton: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const identity = useReduxState(state => state.identity);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const login = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.API_DOMAIN}/login`, {
          method: 'POST',
          credentials: 'include',
        });
        if (!response.ok) throw new Error(response.statusText);
        const identity: Identity = await response.json();
        dispatch(setIdentity(identity));
      } catch (err) {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    login();
  }, []);

  const onSuccess = async (accessKey: any) => {
    try {
      const response = await fetch(`${process.env.API_DOMAIN}/login/google`, {
        method: 'POST',
        body: JSON.stringify(accessKey),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) throw new Error(response.statusText);
      const identity = await response.json();
      dispatch(setIdentity(identity));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onFailure = (e: any) => {
    console.error(e);
    setLoading(false);
  };

  const onLogout = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.API_DOMAIN}/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) throw new Error(response.statusText);
      dispatch(unsetIdentity());
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <StyledLoginButton>
      {identity == null ? (
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          render={renderProps => (
            <Button
              onClick={() => {
                setLoading(true);
                renderProps.onClick();
              }}
              disabled={renderProps.disabled}
              loading={loading}
              iconSrc="/images/icons/google.svg"
            >
              Signin with Google
            </Button>
          )}
        />
      ) : (
        <Button
          onClick={onLogout}
          loading={loading}
          iconSrc="/images/icons/logout.png"
        >
          Sign Out
        </Button>
      )}
    </StyledLoginButton>
  );
};

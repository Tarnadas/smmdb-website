import React from 'react';
import GoogleLogin from 'react-google-login';

const LoginButton: React.FunctionComponent = () => {
  const onSuccess = () => {};
  const onFailure = () => {};
  return (
    <button>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </button>
  );
};

export default LoginButton;

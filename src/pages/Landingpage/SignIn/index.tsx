import { useMsal } from '@azure/msal-react';
import { Button } from '@material-ui/core';

import { loginApiRequest } from '../../../authConfig';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginApiRequest).catch((e) => {
            console.log(e);
        });
    };
    return <Button onClick={() => handleLogin()}>Sign in</Button>;
};

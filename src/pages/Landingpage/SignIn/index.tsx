import { useMsal } from '@azure/msal-react';

import { loginRequest } from '../../../authConfig';
import { Button } from '../../../components/Button';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch((e) => {
            console.log(e);
        });
    };
    return <Button onClick={() => handleLogin()}>Sign in using Popup</Button>;
};

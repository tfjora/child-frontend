import { useMsal } from '@azure/msal-react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { Button } from './Button';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: '/',
        });
    };
    return (
        <Button onClick={() => handleLogout()}>
            <AccountBoxIcon />
        </Button>
    );
};

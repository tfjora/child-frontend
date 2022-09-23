import { useMsal } from '@azure/msal-react';

import Button from './Button';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: '/',
        });
    };
    return (
        <Button
            onClick={() => handleLogout()}
            label="Sign out using Popup"
            name="Sign out using Popup"
            id="signin"
        />
    );
};

import { useIsAuthenticated } from '@azure/msal-react';

import { SignInButton } from '../../../components/SignInButton';
import { SignOutButton } from '../../../components/SignOutButton';

export default function SignIn() {
    const isAuthenticated = useIsAuthenticated();

    return <>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</>;
}

import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

import AppRoutes from './AppRoutes';
import Header from './components/Header';
import { SignInButton } from './pages/Landingpage/SignIn';
import { useStyles } from './styles';

export default function App() {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <AuthenticatedTemplate>
                <Header>
                    <AppRoutes />
                </Header>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <>
                    <h5 className="card-title">Please sign-in to see your profile information.</h5>
                    <SignInButton />
                </>
            </UnauthenticatedTemplate>
        </div>
    );
}

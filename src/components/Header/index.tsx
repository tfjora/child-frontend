import { useIsAuthenticated } from '@azure/msal-react';
import { Tab, Tabs } from '@material-ui/core';
import { useNavigate } from 'react-router';

import { LandingPageTabs } from '../../_models/Tabs';
import { SignInButton } from '../SignInButton';
import { SignOutButton } from '../SignOutButton';
import { useStyles } from './style';

export default function Header({ children }) {
    const navigate = useNavigate();
    const styles = useStyles();
    const onChange = (value: LandingPageTabs | string) => {
        navigate(`/${value}`);
    };

    const isAuthenticated = useIsAuthenticated();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>FOTO</div>
                    <div>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</div>
                </div>
                <Tabs>
                    <Tab
                        label={LandingPageTabs.person}
                        value={LandingPageTabs.person}
                        onClick={() => onChange(LandingPageTabs.person)}
                    />
                    <Tab
                        label="Person detail"
                        value={LandingPageTabs.personDetails}
                        onClick={() => onChange(LandingPageTabs.personDetails)}
                    />
                    <Tab
                        label="Quotes"
                        value={LandingPageTabs.quotes}
                        onClick={() => onChange(LandingPageTabs.quotes)}
                    />
                </Tabs>
            </div>
            {children}
        </>
    );
}

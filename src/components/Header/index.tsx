import { useIsAuthenticated } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

import { LandingPageTabs } from '../../_models/Tabs';
import Button from '../Button';
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
                    <div>
                        <a className="navbar-brand" href="/">
                            Microsoft Identity Platform
                        </a>
                        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                    </div>
                </div>
                <Button
                    onClick={() => onChange(LandingPageTabs.personDetails)}
                    label="test"
                    id="test"
                    name="test"
                />
                {/* <Tabs>
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
                </Tabs> */}
            </div>
            {children}
        </>
    );
}

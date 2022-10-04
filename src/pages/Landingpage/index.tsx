import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { LandingPageTabs } from '../../_models/Tabs';
import Person from './Person';
import PersonDetail from './PersonDetail';
import Quote from './Quotes';
import { useStyles } from './style';

export default function LandingPage(): ReactJSXElement {
    const { tab } = useParams();
    const styles = useStyles();

    const renderTabs = (): ReactNode => {
        switch (tab) {
            case LandingPageTabs.person:
                return <Person />;
            case LandingPageTabs.personDetails:
                return <PersonDetail />;
            case LandingPageTabs.quotes:
                return <Quote />;

            default:
                return <div></div>;
        }
    };

    return <div className={styles.container}>{renderTabs()}</div>;
}

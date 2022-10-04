import { Button, Drawer } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import useAccountContext from '../../../_context/tokenContext';
import type { IQuotes } from '../../../_models/Quotes';
import Add from './Add';
import { useStyles } from './styles';
import View from './View';

export default function Quote() {
    const [quotes, setQuotes] = useState<IQuotes[]>([]);
    const styles = useStyles();
    const [openFlyout, setOpenFlyout] = useState(false);
    const { token } = useAccountContext();

    const onSave = async (content: any) => {
        const request = {
            body: JSON.stringify(content),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        };
        await fetch('https://childquotesapi.azurewebsites.net/api/quotes', request)
            .then((r) => r.json())
            .then((d) => setQuotes([...quotes, d]));
    };

    useEffect(() => {
        const request = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            method: 'GET',
        };
        async function fetchData() {
            await fetch('https://childquotesapi.azurewebsites.net/api/quotes', request)
                .then((b) => b.json())
                .then((data) => setQuotes(data));
        }
        fetchData();
    }, []);

    return (
        <>
            <Drawer
                anchor="right"
                open={openFlyout}
                onClose={() => setOpenFlyout(false)}
                PaperProps={{ style: { minWidth: '25%' } }}
            >
                <Add onSave={onSave} />
            </Drawer>
            <div className={styles.addButton}>
                <h2>Quotes</h2>
                <Button onClick={() => setOpenFlyout(true)}>
                    <AddIcon color="success" />
                </Button>
            </div>
            <View quotes={quotes} />
        </>
    );
}

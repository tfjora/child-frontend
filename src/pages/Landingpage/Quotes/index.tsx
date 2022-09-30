import { Button, Drawer } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import useTokenContext from '../../../_context/tokenContext';
import type { IQuotes } from '../../../_models/Quotes';
import Add from './Add';
import { useStyles } from './styles';
import View from './View';

export default function Quote() {
    const [quotes, setQuotes] = useState<IQuotes[]>([]);
    const styles = useStyles();
    const [openFlyout, setOpenFlyout] = useState(false);
    const token = useTokenContext();

    const onSave = (content: any) => {
        const headers = new Headers();

        const bearer = `Bearer ${token}`;
        headers.append('Authorization', bearer);
        const options = {
            headers: headers,
            method: 'POST',
        };
        const request = {
            body: JSON.stringify(content),
            ...options,
        };
        fetch('https://childquotesapi.azurewebsites.net//api/quotes', request)
            .then((r) => r.json())
            .then((d) => setQuotes([...quotes, d]));
    };

    useEffect(() => {
        const headers = new Headers();

        const bearer = `Bearer ${token}`;
        headers.append('Authorization', bearer);
        const options = {
            headers: headers,
            method: 'GET',
        };
        async function fetchData() {
            fetch('https://childquotesapi.azurewebsites.net/api/quotes', options)
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
            <View books={quotes} />
        </>
    );
}

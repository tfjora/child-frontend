import { Button, Drawer } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import useTokenContext from '../../../_context/tokenContext';
import type { IPerson } from '../../../_models/Person';
import Add from './Add';
import { useStyles } from './styles';
import View from './View';

export default function Person() {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const styles = useStyles();
    const [openFlyout, setOpenFlyout] = useState(false);

    const token = useTokenContext();
    console.log('token', token);

    const onSave = async (content: any) => {
        const request = {
            bearer: `${token}`,
            body: JSON.stringify(content),
            headers: { 'Content-Type': 'application/json', credentials: 'same-origin' },
            method: 'POST',
        };
        try {
            // await fetch('https://childquotesapi.azurewebsites.net/api/person', request)
            await fetch('http://localhost:7209/api/person', request)
                .then((r) => r.json())
                .then((d) => setPersons([...persons, d]));
        } catch (error) {
            console.log('error');
        }
    };

    useEffect(() => {
        async function fetchData() {
            const headers = new Headers();
            console.log('token heere :>> ', token);

            const bearer = token as any;
            headers.append('Authorization', bearer);
            const options = {
                headers: headers,
                method: 'GET',
            };
            try {
                fetch('/api/person', options)
                    // await fetch('https://childquotesapi.azurewebsites.net/api/person', options)
                    .then((b) => b.json())
                    .then((data) => setPersons(data));
            } catch (error) {
                console.log('error :>> ', error);
            }
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
                <h2>Persons</h2>
                <Button onClick={() => setOpenFlyout(true)}>
                    <AddIcon color="success" />
                </Button>
            </div>
            <View persons={persons} />
        </>
    );
}

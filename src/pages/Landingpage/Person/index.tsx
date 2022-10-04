import { Button, Drawer } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import useAccountContext from '../../../_context/tokenContext';
import type { IPerson } from '../../../_models/Person';
import Add from './Add';
import { useStyles } from './styles';
import View from './View';

export default function Person() {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const styles = useStyles();
    const [openFlyout, setOpenFlyout] = useState(false);

    const { token, account } = useAccountContext();

    const onSave = async (content: any) => {
        const request = {
            body: JSON.stringify({ ...content, users: account }),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        };
        try {
            // await fetch('https://childquotesapi.azurewebsites.net/api/person', request)
            fetch('/api/person', request)
                .then((r) => r.json())
                .then((d) => {
                    console.log('d :>> ', d);
                    const p = [...persons, d];
                    console.log('p', p);
                    setPersons([...persons, d]);
                });
        } catch (error) {
            console.log('error');
        }
    };

    useEffect(() => {
        async function fetchData() {
            const headers = new Headers();

            const bearer = `Bearer ${token}`;
            headers.append('Authorization', bearer);
            const options = {
                headers: headers,
                method: 'GET',
            };
            try {
                // fetch('https://childquotesapi.azurewebsites.net/api/person', options)
                fetch('/api/person', options)
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

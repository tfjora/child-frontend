import { Button, Drawer } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import type { IPerson } from '../../../_models/Person';
import Add from './Add';
import { useStyles } from './styles';
import View from './View';

export default function Person() {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const styles = useStyles();
    const [openFlyout, setOpenFlyout] = useState(false);

    const onSave = async (content: any) => {
        const request = {
            body: JSON.stringify(content),
            headers: { 'Content-Type': 'application/json', credentials: 'same-origin' },
            method: 'POST',
        };
        try {
            await fetch('https://childquotesapi.azurewebsites.net/api/person', request)
                // await fetch('/api/person', request)
                .then((r) => r.json())
                .then((d) => setPersons([...persons, d]));
        } catch (error) {
            console.log('error');
        }
    };

    useEffect(() => {
        async function fetchData() {
            // fetch('/api/person', {
            fetch('https://childquotesapi.azurewebsites.net/api/person', {
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
            })
                .then((b) => b.json())
                .then((data) => setPersons(data));
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <Drawer
                anchor="right"
                open={openFlyout}
                onClose={() => setOpenFlyout(false)}
                PaperProps={{ style: { minWidth: '25%' } }}
            >
                <Add onSave={onSave} />
            </Drawer>
            <div className={styles.addButton}>
                <Button onClick={() => setOpenFlyout(true)}>
                    <AddIcon color="success" />
                </Button>
            </div>
            <View persons={persons} />
        </div>
    );
}

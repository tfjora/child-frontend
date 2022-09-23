import { useEffect, useState } from 'react';

import type { IPerson } from '../../../_models/Person';
import Add from './Add';
import { useStyles } from './styles';
import View from './View';

export default function Person() {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const styles = useStyles();

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
            <Add onSave={onSave} />
            <View persons={persons} />
        </div>
    );
}

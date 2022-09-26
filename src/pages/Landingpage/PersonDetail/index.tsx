import { Button, Drawer } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import type { IPersonDetail } from '../../../_models/PersonDetail';
import Add from './Add';
import { useStyles } from './styles';
import View from './View';

export default function PersonDetail() {
    const [personDetails, setPersonDetails] = useState<IPersonDetail[]>([]);
    const styles = useStyles();
    const [openFlyout, setOpenFlyout] = useState(false);

    const onSave = (content: any) => {
        const request = {
            body: JSON.stringify(content),
            headers: { 'Content-Type': 'application/json', credentials: 'same-origin' },
            method: 'POST',
        };
        fetch('https://childquotesapi.azurewebsites.net//api/DetailPerson', request)
            .then((r) => r.json())
            .then((d) => setPersonDetails([...personDetails, d]));
    };

    useEffect(() => {
        async function fetchData() {
            fetch('https://childquotesapi.azurewebsites.net/api/DetailPerson', {
                credentials: 'same-origin',
            })
                .then((b) => b.json())
                .then((data) => setPersonDetails(data));
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
                <h2>Persons details</h2>
                <Button onClick={() => setOpenFlyout(true)}>
                    <AddIcon color="success" />
                </Button>
            </div>
            <View personDetails={personDetails} />
        </>
    );
}

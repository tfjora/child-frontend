import { Button, Divider, TextField } from '@material-ui/core';
import { useState } from 'react';

import { useStyles } from './style';

type Props = { onSave: any };

export default function Add({ onSave }: Props) {
    const [values, setValues] = useState({
        dateTime: new Date().toUTCString(),
        personId: '',
        quote: '',
    });
    const styles = useStyles();

    const onClick = async () => {
        await onSave(values);
    };

    const handleChange = (event: any) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <div className={styles.container}>
            <form autoComplete="off" noValidate className={styles.container}>
                <TextField
                    label="Person"
                    name="personId"
                    onChange={handleChange}
                    required
                    value={values.personId}
                    variant="outlined"
                />

                <TextField
                    helperText="Please add a quote"
                    label="Quote"
                    name="quote"
                    onChange={handleChange}
                    required
                    value={values.quote}
                    variant="outlined"
                />

                <TextField
                    label="Date"
                    name="date"
                    onChange={handleChange}
                    required
                    value={values.dateTime}
                    variant="outlined"
                />

                <Divider />
                <Button color="primary" variant="contained" onClick={onClick}>
                    Save details
                </Button>
            </form>
        </div>
    );
}

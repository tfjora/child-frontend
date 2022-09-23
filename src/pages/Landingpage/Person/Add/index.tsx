import { Button, CircularProgress, Divider, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import { useStyles } from './styles';
const EMPTY_VALUES = { dateBorn: '', firstName: '', lastName: '' };

type Props = { onSave: (values: any) => void };

export default function Add({ onSave }: Props) {
    const [isSaving, setIsSaving] = useState(false);
    const [values, setValues] = useState(EMPTY_VALUES);
    const styles = useStyles();
    const { addToast } = useToasts();

    const onClick = async () => {
        setIsSaving(true);
        try {
            await onSave(values);
            setValues(EMPTY_VALUES);
            addToast('Saved', {
                appearance: 'success',
                autoDismiss: true,
                transitionDuration: 3000,
            });
        } catch (error) {
            addToast(`Error: ${error}`, {
                appearance: 'success',
                autoDismiss: true,
                transitionDuration: 3000,
            });
        } finally {
            setIsSaving(false);
        }
    };

    const handleChange = (event: any) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <div className={styles.container}>
            <form autoComplete="off" noValidate className={styles.container}>
                <TextField
                    label="First name"
                    name="firstName"
                    onChange={handleChange}
                    required
                    value={values.firstName}
                    variant="outlined"
                    disabled={isSaving}
                />

                <TextField
                    label="Last name"
                    name="lastName"
                    onChange={handleChange}
                    required
                    value={values.lastName}
                    variant="outlined"
                    disabled={isSaving}
                />
                <TextField
                    label="Date born"
                    name="dateBorn"
                    onChange={handleChange}
                    required
                    value={values.dateBorn}
                    variant="outlined"
                    disabled={isSaving}
                />

                <Divider />
                {isSaving ? (
                    <CircularProgress size={24} />
                ) : (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={onClick}
                        disabled={isSaving}
                    >
                        Save details
                    </Button>
                )}
            </form>
        </div>
    );
}

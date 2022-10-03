import { Button, Divider, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';

import useTokenContext from '../../../../_context/tokenContext';
import DropDown from '../../../../components/Dropdown';
import { useStyles } from './style';

type Props = { onSave: any };

export default function Add({ onSave }: Props) {
    const [values, setValues] = useState({
        date: new Date().toUTCString(),
        height: '',
        personId: '',
        weight: '',
    });
    const [person, setPerson] = useState('tete');
    const [menuItems, setMenuItems] = useState([{ key: '', label: '' }]);
    const styles = useStyles();
    const token = useTokenContext();

    const mappedPersonForDropdown = (data: any[]) => {
        return data.map((item, index) => {
            const isSelected = index == 0;
            return {
                isDisabled: isSelected,
                isSelected: isSelected,
                key: item,
                label: `${item.firstName} ${item.lastName}`,
            };
        });
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
            fetch('/api/person', request)
                .then((b) => b.json())
                .then((data) => {
                    return setMenuItems(mappedPersonForDropdown(data));
                });
        }
        fetchData();
    }, []);

    const onClick = async () => {
        await onSave(values);
    };

    const handleChange = (event: any) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleChangePerson = (event: any) => {
        console.log('event.target.value', event.target.value.id);
        setPerson(event.target.value);
        setValues({ ...values, ['personId']: event.target.value?.id });
    };

    return (
        <div className={styles.container}>
            <form autoComplete="off" noValidate className={styles.container}>
                <DropDown
                    value={person}
                    onChange={handleChangePerson}
                    label={'Add person'}
                    menuItems={menuItems}
                />

                <TextField
                    label="Date"
                    name="date"
                    onChange={handleChange}
                    required
                    value={values.date}
                    variant="outlined"
                />
                <TextField
                    label="weight"
                    name="weight"
                    onChange={handleChange}
                    required
                    value={values.weight}
                    variant="outlined"
                />
                <TextField
                    label="Height"
                    name="height"
                    onChange={handleChange}
                    required
                    value={values.height}
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

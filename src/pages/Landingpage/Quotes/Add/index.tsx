import { Button, Divider, TextField } from '@material-ui/core';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import { DATE_FNS } from '../../../../_constants/date';
import useAccountContext from '../../../../_context/tokenContext';
import DropDown from '../../../../components/Dropdown';
import { useStyles } from './style';

type Props = { onSave: any };

export default function Add({ onSave }: Props) {
    const [values, setValues] = useState({
        dateTime: format(new Date(), DATE_FNS.ISO_YYYY_MM_DD),
        personId: '',
        quote: '',
    });
    const [menuItems, setMenuItems] = useState([{ key: '', label: '' }]);
    const [person, setPerson] = useState('tete');
    const styles = useStyles();
    const { token } = useAccountContext();

    const onClick = async () => {
        await onSave(values);
    };

    const handleChange = (event: any) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

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

    const handleChangePerson = (event: any) => {
        setPerson(event.target.value);
        setValues({ ...values, ['personId']: event.target.value?.id });
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
                    helperText="Please add a quote"
                    label="Quote"
                    name="quote"
                    onChange={handleChange}
                    required
                    value={values.quote}
                />

                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    name="dateTime"
                    onChange={handleChange}
                    value={values.dateTime}
                />

                <Divider />
                <Button color="primary" variant="contained" onClick={onClick}>
                    Save details
                </Button>
            </form>
        </div>
    );
}

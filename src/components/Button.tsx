import { makeStyles } from '@material-ui/core/styles';
import { useRef } from 'react';

type Props = {
    id: string;
    name: string;
    label: string;
    onClick: () => void;
};

export default function Button({ id, name, label, onClick }: Props) {
    const useStyles = makeStyles({
        root: {
            color: 'red',
        },
    });
    const ref = useRef<HTMLButtonElement>(null);

    const styles = useStyles();
    return (
        <div className={styles.root}>
            <button type={'button'} id={id} name={name} ref={ref} onClick={onClick}>
                {label}
            </button>
        </div>
    );
}

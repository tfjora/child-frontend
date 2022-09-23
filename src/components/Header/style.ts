import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
        background: 'lightgrey',
        borderRadius: '16px',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr',
        height: '100%',
        padding: '32px',
        width: '100%',
    },
    header: {
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
    },
});

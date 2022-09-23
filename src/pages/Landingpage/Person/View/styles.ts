import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    table: {
        display: 'grid',
        gridTemplateRows: 'max-content auto',
        maxHeight: `calc(8 * 30px)`,
        overflow: 'auto',
        width: '100%',
    },
    tableBody: {
        display: 'block',
        height: '100%',
        maxHeight: '100%',
        width: '100%',
    },
    tableCell: {
        '&:hover': {
            cursor: 'pointer',
        },
        boxSizing: 'border-box',
        display: 'block',
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%',
    },
    tableHeader: {
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        border: `0.5px solid black`,
        boxSizing: 'border-box',
        color: 'black',
        display: 'flex',
        fontSize: '14px',
        fontWeight: 400,
        height: '48px',
        justifyContent: 'space-between',
        paddingLeft: '4px',
        textAlign: 'left',
    },
    tableHeaderRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))',
    },
    tableRow: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))',
        height: '46px',
    },
    tableThead: {
        position: 'sticky',
        top: 0,
    },
});

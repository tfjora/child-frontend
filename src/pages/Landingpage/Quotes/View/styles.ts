import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    table: {
        border: '1px solid lightgrey',
        display: 'grid',
        gridTemplateRows: 'max-content auto',
        maxHeight: `calc(8 * 600px)`,
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
            //
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
        borderBottom: '1px solid lightgrey',
        boxSizing: 'border-box',
        color: 'black',
        display: 'flex',
        fontSize: '14px',
        fontWeight: 700,
        height: '48px',
        paddingLeft: '4px',
    },
    tableHeaderRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
    },
    tableRow: {
        borderBottom: '1px solid lightgrey',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
        height: '46px',
    },
    tableTd: {
        alignItems: 'center',
        borderCollapse: 'collapse',
        boxSizing: 'border-box',
        display: 'flex',
        height: '48px',
        paddingLeft: '4px',
    },

    tableThead: {
        position: 'sticky',
        top: 0,
    },
});

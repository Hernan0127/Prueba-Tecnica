import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        marginTop: '2rem',
    },
    summary: {
        marginBottom: '2rem',
    },
    table: {
        minWidth: 650,
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    headerCell: {
        backgroundColor: '#3f51b5',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        '&:nth-of-type(odd)': {
        backgroundColor: '#f2f2f2',
        },
    },
    cell: {
        padding: '1rem',
        textAlign: 'center',
    },
    subheader: {
        marginBottom: '1rem',
        fontWeight: 'bold',
        backgroundColor: '#3f51b5',
        color: 'white',
        padding: '0.5rem',
        borderRadius: '8px',
        width: 'fit-content',
    },
    totalCost: {
        marginTop: '1rem',
        fontWeight: 'bold',
    },
});

export default useStyles;
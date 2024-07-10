import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        marginTop: '2rem',
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
});

export default useStyles;
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '1rem',
    },
    input: {
        width: '100%',
    },
    paper: {
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    },
});

export default useStyles;

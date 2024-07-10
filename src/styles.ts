import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem',
    },
    paper: {
        padding: '1rem',
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        maxHeight: '400px',
        overflowY: 'auto',
    },
}));

export default useStyles;
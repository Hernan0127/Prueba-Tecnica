import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem',
    },
    paper: {
        padding: '1rem',
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        maxHeight: '615px',
        overflowY: 'auto',
    },
    inventoryPaper: {
        padding: '1rem',
        backgroundColor: '#e3f2fd',
        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
    },
}));

export default useStyles;
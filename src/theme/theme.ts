import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#8ab3cf',
        },
        secondary: {
            main: '#bdd1de',
        },
        background: {
            default: '#e4ebf0',
            paper: '#ffffff',
        },
        text: {
            primary: '#4180ab',
        },
    },
    typography: {
        h4: {
            fontWeight: 700,
        },
        body1: {
            fontSize: '1.1rem',
        },
    },
});

export default theme;
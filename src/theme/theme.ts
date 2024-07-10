import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#f4f4f4',
        },
        text: {
            primary: '#333',
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
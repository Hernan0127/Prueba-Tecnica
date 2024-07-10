import React from 'react';
import { Box, Typography } from '@mui/material';
import { ErrorMessageUIProps } from './interface';

const ErrorMessage = ({
    classes,
    message 
}: ErrorMessageUIProps) => {

    return (
        <Box className={classes.container}>
            <Typography variant="body1" className={classes.message}>
                {message}
            </Typography>
        </Box>
    );
};

export default ErrorMessage;
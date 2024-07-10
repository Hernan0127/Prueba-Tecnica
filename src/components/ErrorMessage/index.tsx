import React from "react";

import ErrorMessageUI from "./ErrorMessage";
import { ErrorMessageProps } from "./interface";
import useStyles from "./ErrorMessage.styles";

const ErrorMessage = ({
    message
}: ErrorMessageProps) => {
    
    const classes = useStyles();

    return <ErrorMessageUI
        classes={classes}
        message={message}
    />
}

export default ErrorMessage;
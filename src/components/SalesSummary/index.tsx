import React from 'react';

import SalesSummaryUI from './SalesSummary';
import { SalesSummaryProps } from './interface';
import useStyles from './SalesSummary.styles';

const SalesSummary = ({
    salesSummary,
}: SalesSummaryProps) => {
    const classes = useStyles();

    return <SalesSummaryUI 
        classes={classes}
        salesSummary={salesSummary}
    />
}

export default SalesSummary;

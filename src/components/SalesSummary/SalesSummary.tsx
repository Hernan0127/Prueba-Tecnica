import React from 'react';
import { 
    Box, 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    Typography 
} from '@mui/material';
import { SalesSummaryUIProps } from './interface';
import { formatNumber, formatDate } from '../../utils/utils';

const SalesSummary = ({
    classes,
    salesSummary,
}: SalesSummaryUIProps) => {
    return (
        <Box className={classes.container}>
            <Typography variant="h6" gutterBottom>
                Resumen de Ventas
            </Typography>
            {salesSummary.map((summary, index) => (
                <Box key={index} className={classes.summary}>
                    <Typography variant="subtitle1" className={classes.subheader}>Venta {index + 1}</Typography>
                    <Table className={classes.table} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.headerCell}>Litros</TableCell>
                                <TableCell className={classes.headerCell}>Fecha de Entrada</TableCell>
                                <TableCell className={classes.headerCell}>Precio por Litro</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {summary.items.map((item, idx) => (
                                <TableRow key={idx} className={classes.row}>
                                    <TableCell className={classes.cell}>{formatNumber(item.liters)} Litros</TableCell>
                                    <TableCell className={classes.cell}>{formatDate(item.date)}</TableCell>
                                    <TableCell className={classes.cell}>${formatNumber(item.pricePerLiter)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Typography variant="subtitle1" className={classes.totalCost}>
                        Costo Total: ${formatNumber(summary.totalCost)}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default SalesSummary;

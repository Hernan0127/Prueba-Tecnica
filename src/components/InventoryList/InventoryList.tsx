import React from 'react';
import { 
    Box, 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    TableSortLabel, 
    Typography 
} from '@mui/material';
import { InventoryListUIProps } from './interface';
import { formatNumber, formatDate } from '../../utils/utils';

const InventoryList = ({
    classes,
    order,
    handleSort,
    sortedInventory,
}: InventoryListUIProps) => {
    return (
        <Box className={classes.container}>
            <Typography variant="h6" gutterBottom>
                Inventario de Diesel
            </Typography>
            <Table className={classes.table} stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headerCell}>Litros</TableCell>
                        <TableCell className={classes.headerCell}>
                        <TableSortLabel active direction={order} onClick={handleSort}>
                            Fecha de Entrada
                        </TableSortLabel>
                        </TableCell>
                        <TableCell className={classes.headerCell}>Precio por Litro</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedInventory.map((item, index) => (
                        <TableRow key={index} className={classes.row}>
                            <TableCell className={classes.cell}>{formatNumber(item.liters)} Litros</TableCell>
                            <TableCell className={classes.cell}>{formatDate(item.date)}</TableCell>
                            <TableCell className={classes.cell}>${formatNumber(item.pricePerLiter)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default InventoryList;

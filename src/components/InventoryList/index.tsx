import React, { useState } from 'react';

import InventoryListUI from './InventoryList';
import { InventoryListProps } from './interface';
import useStyles from './InventoryList.styles';

const InventoryList = ({
    inventory,
}: InventoryListProps) => {
    const classes = useStyles();
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = () => {
        setOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const sortedInventory = [...inventory].sort((a, b) => {
        if (order === 'asc') {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        } else {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
    });

    return <InventoryListUI 
        classes={classes}
        order={order}
        handleSort={handleSort}
        sortedInventory={sortedInventory}
    />
}

export default InventoryList;

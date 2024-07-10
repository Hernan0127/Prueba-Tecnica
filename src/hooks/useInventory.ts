import { useState } from 'react';
import { InventoryItem, SaleSummaryItem } from '../types';

const useInventory = () => {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [salesSummary, setSalesSummary] = useState<SaleSummaryItem[]>([]);

    const addInventory = (item: InventoryItem) => {
        setInventory((prevInventory) => [...prevInventory, item].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    };

    const registerSale = (litersSold: number) => {
        let remainingLiters = litersSold;
        const updatedInventory = [...inventory].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        const saleSummary: InventoryItem[] = [];
        let totalCost = 0;

        while (remainingLiters > 0 && updatedInventory.length > 0) {
            const currentBatch = updatedInventory[0];
            const availableLiters = currentBatch.liters;

            if (availableLiters <= remainingLiters) {
                saleSummary.push({
                    ...currentBatch,
                    liters: availableLiters,
                });
                totalCost += availableLiters * currentBatch.pricePerLiter;
                remainingLiters -= availableLiters;
                updatedInventory.shift();
            } else {
                saleSummary.push({
                    ...currentBatch,
                    liters: remainingLiters,
                });
                totalCost += remainingLiters * currentBatch.pricePerLiter;
                updatedInventory[0].liters -= remainingLiters;
                remainingLiters = 0;
            }
        }

        if (remainingLiters > 0) {
            throw new Error('Not enough inventory to complete the sale.');
        }

        setInventory(updatedInventory);
        setSalesSummary((prevSummary) => [
            ...prevSummary,
            { items: saleSummary, totalCost },
        ]);
    };

    return {
        inventory,
        salesSummary,
        addInventory,
        registerSale,
    };
};

export default useInventory;

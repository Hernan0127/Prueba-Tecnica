export interface InventoryItem {
    liters: number;
    date: Date;
    pricePerLiter: number;
}

export interface SaleSummaryItem {
    items: InventoryItem[];
    totalCost: number;
}
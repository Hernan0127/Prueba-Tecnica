export interface InventoryItem {
    liters: number;
    date: Date;
    pricePerLiter: number;
}

export interface AddInventoryProps {
    onAddInventory: (item: InventoryItem) => void;
}

export interface AddInventoryUIProps {
    classes: Record<string, string>;
    liters: string;
    setLiters: (liters: string) => void;
    date: string;
    setDate: (date: string) => void;
    price: string;
    setPrice: (price: string) => void;
    handleSubmit: () => void;
    isFormValid: boolean;
}
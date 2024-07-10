import { InventoryItem } from '../../types';

export interface InventoryListProps {
    inventory: InventoryItem[];
}

export interface InventoryListUIProps {
    classes: Record<string, string>;
    order: 'asc' | 'desc';
    handleSort: () => void;
    sortedInventory: InventoryItem[];
}
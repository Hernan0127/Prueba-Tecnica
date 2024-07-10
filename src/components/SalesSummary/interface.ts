import { SaleSummaryItem } from '../../types';

export interface SalesSummaryProps {
    salesSummary: SaleSummaryItem[];
}

export interface SalesSummaryUIProps {
    classes: Record<string, string>;
    salesSummary: SaleSummaryItem[];
}
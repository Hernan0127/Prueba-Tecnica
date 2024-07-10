export interface RegisterSalesProps {
    onRegisterSale: (litersSold: number) => void;
    availableLiters: number;
}

export interface RegisterSalesUIProps {
    classes: Record<string, string>;
    litersSold: string;
    setLitersSold: (litersSold: string) => void;
    handleSubmit: () => void;
    isFormValid: boolean;
}
export interface FinancialGroup {
    id: string;
    category?: string;
    items: FinancialItem[];
    isNewItem: boolean;
    totalAmount: number;
}

export interface FinancialItem {
    id: string;
    name: string;
    price: number;
}

export interface TotalAmount {
    id: string;
    totalAmount: number;
}


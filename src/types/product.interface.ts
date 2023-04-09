export interface IProduct {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface IShopData {
    id: number,
    title: string;
    items: IProduct[];
}

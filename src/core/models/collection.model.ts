import { Product } from "./product.model";

export interface Collection {
    id: number;
    title: string;
    routeName: string;
    items: Product[];
}
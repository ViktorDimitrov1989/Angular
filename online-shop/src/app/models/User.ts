import { Product } from './Product';
export interface User {
    username: string;
    password: string;
    confirmPassword: string;
    phone: string;
    email: string;
    products: Product[];
}
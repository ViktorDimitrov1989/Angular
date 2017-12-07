import { Product } from './Product';
export interface RegisterUser {
    username: string;
    password: string;
    confirmPassword: string;
    phone: string;
    email: string;
    products: Object[];
    role: string;
}
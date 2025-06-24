import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { BooksType } from "../../Constants/INTERFACES";
import axios from "axios";
import { CART_URLs } from "../../Constants/END_POINTS";
import { toast } from "react-toastify";

interface CartContextInterface {
    cartItems: BooksType[];
    cartID: any
    isLoading: boolean;
    getCartItems: () => void;
    addToCart: (book: BooksType) => void;
    removeFromCart: (book: BooksType) => void;
    deleteProduct: (book: BooksType) => void;
}
export const CartContext = createContext<CartContextInterface | null>(null);

interface CartContextproviderProps {
    children: ReactNode
}

export default function CartContextProvider({ children }: CartContextproviderProps) {

    let [cartItems, setCartItems] = useState<BooksType[]>([]);
    let [cartID, setCartID] = useState(null);

    const [isLoading, setIsLoading] = useState(false);




    const token = localStorage.getItem('accessToken');

    const getCartItems = async () => {
        try {
            const response = await axios.get(CART_URLs.getCart, { headers: { Authorization: `Bearer ${token}` } })
            // console.log('cartID',response.data._id)
            setCartID(response.data._id);
            let filteredItems
            if (response.data.items) {
                filteredItems = response.data.items.filter((item: any) => item.quantity > 0)
            }

            setCartItems(filteredItems);
        } catch (error) {
            console.error("Failed to get cart items:", error);
        }
    };

    useEffect(() => {
        getCartItems();
    }, []);

    let addToCart = async (book: any) => {
        setIsLoading(true);
        try {
            await axios.post(CART_URLs.addItem, { book: book._id, quantity: 1 }, { headers: { Authorization: `Bearer ${token}` } })
            await getCartItems();
            toast.success(`${book.name} is added successfully`)

        } catch (error) {
            console.error(error);
            toast.error(`Failed to add ${book.name} to cart`)
        }
        setIsLoading(false);
    };

    let removeFromCart = async (book: any) => {
        setIsLoading(true);
        try {
            await axios.delete(CART_URLs.deleteItem, { data: { book: book._id }, headers: { Authorization: `Bearer ${token}` } })
            await getCartItems();
            toast.success(`${book.name} is removed successfully`)
        } catch (error) {
            console.error(error);
            toast.error(`Failed to remove ${book.name}`)
        }
        setIsLoading(false);
    };


    let deleteProduct = async (book: any) => {
        setIsLoading(true);
        try {
            for (let i = 0; i < book.count; i++) {
                await axios.delete(CART_URLs.deleteItem, {
                    data: { book: book._id },
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
            // toast.success('Book removed successfully')
        }
        catch (error) {
            console.error(error);
            toast.error(`Failed to delete ${book.name}`)
        }
        await getCartItems();
        setIsLoading(false);
        toast.success(`${book.name} is deleted successfully`);
    }

    return (
        <CartContext.Provider value={{ cartItems, cartID, isLoading, addToCart, removeFromCart, getCartItems, deleteProduct }}>{children}</CartContext.Provider>
    )
}
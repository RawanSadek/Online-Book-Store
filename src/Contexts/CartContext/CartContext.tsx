import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { BooksType } from "../../Constants/INTERFACES";

interface CartContextInterface {
    cartItems: BooksType[];
    addToCart: (book: BooksType) => void;
    removeFromCart: (book: BooksType) => void;
}
export const CartContext = createContext<CartContextInterface | null>(null);

interface CartContextproviderProps {
    children: ReactNode
}

export default function CartContextProvider({ children }: CartContextproviderProps) {

    let [cartItems, setCartItems] = useState<BooksType[]>([]);

    useEffect(() => {
        let storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        } else {
            setCartItems([]);
        }
    }, []);

    let addToCart = (book: BooksType) => {
        let updatedCart = [...cartItems, book];
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    let removeFromCart = (book: BooksType) => {
        let indexToRemove = [...cartItems].map((item, idx) => ({ item, idx })).reverse().find(({ item }) => item._id === book._id)?.idx; // to remove the last occurrence of the book in the array
        let updatedCart;
        if (indexToRemove !== undefined) {
            updatedCart = [
                ...cartItems.slice(0, indexToRemove),
                ...cartItems.slice(indexToRemove + 1)
            ];
            setCartItems(updatedCart);
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    )
}
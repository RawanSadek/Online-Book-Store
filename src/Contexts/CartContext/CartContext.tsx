import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type {BooksType } from "../../Constants/INTERFACES";

interface CartContextInterface {
    cartItems: BooksType[];
    addToCart: (book: BooksType) => void;
}
export const CartContext = createContext<CartContextInterface | null>(null);

interface CartContextproviderProps {
    children: ReactNode
}

export default function CartContextProvider({ children }: CartContextproviderProps) {
    // let [booksData, setBooksData] = useState<Book[]>([]);

    // let saveBooksData = () => {
    //     const cartData = JSON.parse(String(localStorage.getItem("cartItems")));
    //     if (cartData) {
    //         setBooksData(cartData)
    //     }
    // }

    let [cartItems, setCarItems] = useState<BooksType[]>([]);

    useEffect(() => {
        let storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCarItems(JSON.parse(storedCartItems));
        } else {
            setCarItems([]);
        }
    }, []);

    let addToCart = (book: BooksType) => {
        let updatedCart = [...cartItems, book];
        setCarItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>{children}</CartContext.Provider>
    )
}
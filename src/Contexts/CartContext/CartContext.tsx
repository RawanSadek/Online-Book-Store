import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { BooksType } from "../../Constants/INTERFACES";
import axios from "axios";
import { CART_URLs } from "../../Constants/END_POINTS";
import { toast } from "react-toastify";

interface CartContextInterface {
    cartItems: BooksType[];
    cartID: any
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

    // useEffect(() => {
    //     let storedCartItems = localStorage.getItem("cartItems");
    //     if (storedCartItems) {
    //         setCartItems(JSON.parse(storedCartItems));
    //     } else {
    //         setCartItems([]);
    //     }
    // }, []);



    const token = localStorage.getItem('accessToken');

    const getCartItems = async () => {
        try {
            const response = await axios.get(CART_URLs.getCart, { headers: { Authorization: `Bearer ${token}` } })
            console.log('cartID',response.data._id)
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

//     useEffect(() => {
//     console.log("Updated cartID:", cartID);
// }, [cartID]);
    
    useEffect(() => {
        getCartItems();
    }, []);

    let addToCart = async (book: any) => {
        // let updatedCart = [...cartItems, book];
        // setCartItems(updatedCart);
        // localStorage.setItem("cartItems", JSON.stringify(updatedCart));

        try {
            await axios.post(CART_URLs.addItem, { book: book._id, quantity: 1 }, { headers: { Authorization: `Bearer ${token}` } })
            await getCartItems();
            toast.success(`${book.name} is added successfully`)
            // console.log('getCartItems', getCartItems())

        } catch (error) {
            console.error(error);
            toast.error(`Failed to add ${book.name} to cart`)
        }
    };

    let removeFromCart = async (book: any) => {
        // let indexToRemove = [...cartItems].map((item, idx) => ({ item, idx })).reverse().find(({ item }) => item._id === book._id)?.idx; // to remove the last occurrence of the book in the array
        // let updatedCart;
        // if (indexToRemove !== undefined) {
        //     updatedCart = [
        //         ...cartItems.slice(0, indexToRemove),
        //         ...cartItems.slice(indexToRemove + 1)
        //     ];
        //     setCartItems(updatedCart);
        //     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        // }

        try {
            await axios.delete(CART_URLs.deleteItem, { data: { book: book._id }, headers: { Authorization: `Bearer ${token}` } })
            await getCartItems();
            toast.success(`${book.name} removed successfully`)
        } catch (error) {
            console.error(error);
            toast.error(`Failed to remove ${book.name}`)
        }
    };


    let deleteProduct = async (book: any) => {

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
        toast.success(`${book.name} is deleted successfully`);
    }

    return (
        <CartContext.Provider value={{ cartItems, cartID, addToCart, removeFromCart, getCartItems, deleteProduct }}>{children}</CartContext.Provider>
    )
}
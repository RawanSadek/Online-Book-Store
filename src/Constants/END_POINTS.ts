const BASE_URL = 'https://upskilling-egypt.com:3007'

const BASE_AUTH = `${BASE_URL}/api/auth`
export const BASE_CATEG = `${BASE_URL}/api/category`
export const BASE_BOOKS = `${BASE_URL}/api/book`
const BASE_CART = `${BASE_URL}/api/basket`
const BASE_ORDER = `${BASE_URL}/api/order`

export const AUTH_URLs = {
    login: `${BASE_AUTH}/login`,
    register: `${BASE_AUTH}/register`,
    forgot: `${BASE_AUTH}/forgot-password`,
    reset: `${BASE_AUTH}/reset-password`,
    change: `${BASE_AUTH}/change-password`,
}

export const CART_URLs = {
    addItem: `${BASE_CART}/item`,
    deleteItem: `${BASE_CART}/item`,
    getCart: `${BASE_CART}`,
    updateCartItems: ``
}

export const ORDER_URLs = {
    ceateOrder: `${BASE_ORDER}`,
    getMyOrder: `${BASE_ORDER}/myOrder`
}
const BASE_URL = 'https://upskilling-egypt.com:3007'

const BASE_AUTH = `${BASE_URL}/api/auth`
export const BASE_CATEG = `${BASE_URL}/api/category`
export const BASE_BOOKS = `${BASE_URL}/api/book`

export const AUTH_URLs = {
    login: `${BASE_AUTH}/login`,
    register: `${BASE_AUTH}/register`,
    forgot: `${BASE_AUTH}/forgot-password`,
    reset: `${BASE_AUTH}/reset-password`,
    change: `${BASE_AUTH}/change-password`,
}
export interface CategoriesType {
    _id: string;
    title: string;
    status: string;
    books: object[];
}

export interface BooksType {
    _id: string;
    name: string;
    description: string;
    author: string;
    price: number;
    image: string;
    category: string;
    status: string;
    updatedAt: string;
    createdAt: string;
    __v: number;
}
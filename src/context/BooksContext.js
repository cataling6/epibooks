import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('')

    const getBooks = async () => {
        try {
            const response = await fetch('https://epibooks.onrender.com/fantasy')
            const data = await response.json();
            setBooks(data);

        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        getBooks();
    }, [])

    return (

        <BookContext.Provider value={{ books, error }}>
            {children}
        </BookContext.Provider >
    )
}

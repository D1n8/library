import { useMemo } from "react"
import { IBookItem, SortKeys } from "../modules"


export function useSortedBooks(books: IBookItem[], sort: SortKeys | '') {
    const sortedBooks = useMemo(() => {
        if (sort) {
            return [...books].sort((a, b) => a[sort as SortKeys].localeCompare(b[sort as SortKeys]))
        } else {
            return books
        }
    }, [sort, books])

    return sortedBooks;
}

export function useBooks(books: IBookItem[], sort: SortKeys | '', query: string) {
    const sortedBooks = useSortedBooks(books, sort);
    
    const searchedAndSortedBooks = useMemo(() => {
        return [...sortedBooks].filter(book => book.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedBooks])

    return searchedAndSortedBooks;
}
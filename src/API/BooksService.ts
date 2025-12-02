import axios from "axios";
import { IBookItem } from "../modules";

export default class BooksService {
    static async getAll() {
        const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
        return response.data
    }

    static async addBook(book: IBookItem) {
        const response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books',
            { title: book.title, description: book.description, excerpt: book.excerpt, pageCount: book.pageCount, publishDate: book.publishDate }
        )
        return response.data
    }
}
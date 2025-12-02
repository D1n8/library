import axios from "axios";

export default class BooksService {
    static async getAll() {
        const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
        return response.data
    }
}
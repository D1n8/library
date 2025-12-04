import React, { useEffect, useState } from 'react';
import { IBookItem, IFilter } from '../../modules';
import BooksList from '../BooksList';
import BooksForm from '../BooksForm';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/MyButton';
import BooksFilter from '../BooksFilter';
import { useBooks } from '../../hooks/useBooks';
import BooksService from '../../API/BooksService';
import { Oval } from 'react-loader-spinner'
import { useFetching } from '../../hooks/useFetching';

function BooksPage() {
  const [books, setBooks] = useState<IBookItem[]>([]);
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState<IFilter>({ sort: '', query: '' })

  const [fetchBooks, isLoadingBooks, fetchBooksError] = useFetching(async () => {
    const books = await BooksService.getAll();
    setBooks(books)
  })

  useEffect(() => {
    fetchBooks()
  }, [])

  const searchedAndSortedBooks = useBooks(books, filter.sort, filter.query);

  const [createBook, isLoadingCreatingBook, createBookError] = useFetching(async (newBook: IBookItem) => {
    const data = await BooksService.addBook(newBook);
    setBooks([...books, data]);
    setModal(false)
  })

  const deleteBook = (book: IBookItem) => {
    setBooks([...books].filter(currBook => currBook.id !== book.id))
  }

  return (
    <div className='books-page'>
      <MyButton style={{ marginBottom: "20px" }} onClick={() => setModal(true)}>Создать книгу</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {isLoadingCreatingBook
          ? <div style={{ display: 'flex', justifyContent: "center" }}><Oval
            height={60}
            width={60}
            color="teal"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#teal"
            strokeWidth={4}
            strokeWidthSecondary={4}
          /></div>
          :
          <BooksForm create={createBook}></BooksForm>
        }
      </MyModal>
      <BooksFilter filter={filter} setFilter={setFilter} />
      {fetchBooksError && <h3>Произошла ошибка: {fetchBooksError.toString()}</h3>}
      {isLoadingBooks
        ? <div style={{ marginTop: 50, display: 'flex', justifyContent: "center" }}><Oval
          height={60}
          width={60}
          color="teal"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#teal"
          strokeWidth={4}
          strokeWidthSecondary={4}
        /></div>
        : <BooksList books={searchedAndSortedBooks} title='Список книг' onDelete={deleteBook} />
      }
    </div>
  );
}

export default BooksPage;

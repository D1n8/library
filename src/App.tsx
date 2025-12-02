import React, { useEffect, useState } from 'react';
import './App.css';
import { IBookItem, IFilter } from './modules';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import BooksFilter from './components/BooksFilter';
import { useBooks } from './hooks/useBooks';
import BooksService from './API/BooksService';
import { Audio, Oval } from 'react-loader-spinner'
import { useFetching } from './hooks/useFetching';

function App() {
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

  const createBook = (newBook: IBookItem) => {
    setBooks([...books, newBook]);
    setModal(false)
  }

  const deleteBook = (book: IBookItem) => {
    setBooks([...books].filter(currBook => currBook.id !== book.id))
  }

  return (
    <div className='main'>
      <MyButton style={{ marginBottom: "20px" }} onClick={() => setModal(true)}>Создать книгу</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <BooksForm create={createBook}></BooksForm>
      </MyModal>
      <BooksFilter filter={filter} setFilter={setFilter} />
      { fetchBooksError && <h3>Произошла ошибка: {fetchBooksError.toString()}</h3>}
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

export default App;

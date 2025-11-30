import React, { useMemo, useState } from 'react';
import './App.css';
import { IBookItem, IFilter } from './modules';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import BooksFilter from './components/BooksFilter';
import { useBooks } from './hooks/usePosts';

function App() {
  const [books, setBooks] = useState<IBookItem[]>([
    { id: 5, name: "Book 1", descr: 'qweqwe' },
    { id: 2, name: "Book 2", descr: 'Bescr descr' },
    { id: 3, name: "Book 3", descr: 'Boooook descr descr' }
  ]);

  const [modal, setModal] = useState(false)

  const [filter, setFilter] = useState<IFilter>({ sort: '', query: '' })

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

      <BooksList books={searchedAndSortedBooks} title='Список книг' onDelete={deleteBook} />
    </div>
  );
}

export default App;

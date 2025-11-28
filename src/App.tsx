import React, { useState } from 'react';
import './App.css';
import { IBookItem } from './modules';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';

function App() {
  const [books, setBooks] = useState<IBookItem[]>([
    { id: 5, name: "Book 1", descr: 'qweqwe' },
    { id: 2, name: "Book 2", descr: 'Bescr descr' },
    { id: 3, name: "Book 3", descr: 'Boooook descr descr' }
  ]);

  const createBook = (newBook: IBookItem) => {
    setBooks([...books, newBook]);
  }

  return (
    <div className='main'>
      <BooksForm create={createBook}></BooksForm>
      <BooksList books={books} title='Список книг' />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { IBookItem, SortKeys } from './modules';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [books, setBooks] = useState<IBookItem[]>([
    { id: 5, name: "Book 1", descr: 'qweqwe' },
    { id: 2, name: "Book 2", descr: 'Bescr descr' },
    { id: 3, name: "Book 3", descr: 'Boooook descr descr' }
  ]);

  const [selectedSort, setSelectedSort] = useState<SortKeys | ''>('');

  const createBook = (newBook: IBookItem) => {
    setBooks([...books, newBook]);
  }

  const deleteBook = (book: IBookItem) => {
    setBooks([...books].filter(currBook => currBook.id !== book.id))
  }

  const sortBooks = (sort: SortKeys) => {
    setSelectedSort(sort);
    setBooks([...books].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className='main'>
      <BooksForm create={createBook}></BooksForm>
      <MySelect
        value={selectedSort}
        onChange={sortBooks}
        defaultValue={'Сортировка'}
        options={[{ name: 'По названию', value: 'name' }, { name: 'По описанию', value: 'descr' }]}/>
      <BooksList books={books} title='Список книг' onDelete={deleteBook}/>
    </div>
  );
}

export default App;

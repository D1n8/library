import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { IBookItem, SortKeys } from './modules';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [books, setBooks] = useState<IBookItem[]>([
    { id: 5, name: "Book 1", descr: 'qweqwe' },
    { id: 2, name: "Book 2", descr: 'Bescr descr' },
    { id: 3, name: "Book 3", descr: 'Boooook descr descr' }
  ]);

  const [selectedSort, setSelectedSort] = useState<SortKeys | ''>('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedBooks = useMemo(() => {
    if (selectedSort) {
      return [...books].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return books
    }
  }, [selectedSort, books])

  const searchedAndSortedBooks = useMemo(() => {
    return [...sortedBooks].filter(book => book.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedBooks])

  const createBook = (newBook: IBookItem) => {  
    setBooks([...books, newBook]);
  }

  const deleteBook = (book: IBookItem) => {
    setBooks([...books].filter(currBook => currBook.id !== book.id))
  }

  const sortBooks = (sort: SortKeys) => {
    setSelectedSort(sort);
  }

  return (
    <div className='main'>
      <BooksForm create={createBook}></BooksForm>
      <hr style={{marginBlock: '20px'}}/>

      <div className="filters">
        <MySelect
          value={selectedSort}
          onChange={sortBooks}
          defaultValue={'Сортировка'}
          options={[{ name: 'По названию', value: 'name' }, { name: 'По описанию', value: 'descr' }]} />
        <MyInput
          placeholder={'Поиск...'}
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e.target.value)} />
      </div>

      <BooksList books={searchedAndSortedBooks} title='Список книг' onDelete={deleteBook} />
    </div>
  );
}

export default App;

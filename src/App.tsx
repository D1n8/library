import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { IBookItem, SortKeys } from './modules';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

interface IFilter {
  sort: SortKeys | '',
  query: string
}

function App() {
  const [books, setBooks] = useState<IBookItem[]>([
    { id: 5, name: "Book 1", descr: 'qweqwe' },
    { id: 2, name: "Book 2", descr: 'Bescr descr' },
    { id: 3, name: "Book 3", descr: 'Boooook descr descr' }
  ]);

  const [modal, setModal] = useState(false)

  const [filter, setFilter] = useState<IFilter>({ sort: '', query: '' })

  const sortedBooks = useMemo(() => {
    if (filter.sort) {
      return [...books].sort((a, b) => a[filter.sort as SortKeys].localeCompare(b[filter.sort as SortKeys]))
    } else {
      return books
    }
  }, [filter.sort, books])

  const searchedAndSortedBooks = useMemo(() => {
    return [...sortedBooks].filter(book => book.name.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedBooks])

  const createBook = (newBook: IBookItem) => {
    setBooks([...books, newBook]);
    setModal(false)
  }

  const deleteBook = (book: IBookItem) => {
    setBooks([...books].filter(currBook => currBook.id !== book.id))
  }

  return (
    <div className='main'>
      <MyButton style={{marginBottom: "20px"}} onClick={() => setModal(true)}>Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <BooksForm create={createBook}></BooksForm>
      </MyModal>
      <div className="filters">
        <MySelect
          value={filter.sort}
          onChange={selected => setFilter({ ...filter, sort: selected })}
          defaultValue={'Сортировка'}
          options={[{ name: 'По названию', value: 'name' }, { name: 'По описанию', value: 'descr' }]} />
        <MyInput
          placeholder={'Поиск...'}
          value={filter.query}
          onChange={(e: any) => setFilter({ ...filter, query: e.target.value })} />
      </div>

      <BooksList books={searchedAndSortedBooks} title='Список книг' onDelete={deleteBook} />
    </div>
  );
}

export default App;

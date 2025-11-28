import * as React from 'react';
import { IPropsBooksList } from '../modules';
import BookItem from './BooksItem';


function BooksList({ books, title }: IPropsBooksList) {
    return (
        <section>
            {books.length !== 0
                ? <div className='books__list'>
                    <h2 style={{ textAlign: 'center' }}>{title}</h2>
                    
                    {books.map((book, index) => (
                        <BookItem key={book.id} {...book} number={index} />
                    ))}
                </div>
                : <p>Книг не найдено</p>
            }
        </section>);
}

export default BooksList;
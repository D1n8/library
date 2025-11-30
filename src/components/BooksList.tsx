import * as React from 'react';
import { IPropsBooksList } from '../modules';
import BookItem from './BooksItem';


function BooksList({ books, title, onDelete }: IPropsBooksList) {
    return (
        <section>
            {books.length !== 0
                ?
                <>
                    <h2 style={{ textAlign: 'center', marginBlock: '20px' }}>{title}</h2>
                    <div className='books__list'>

                        {books.map((book, index) => (
                            <BookItem onDelete={onDelete} key={book.id} {...book} number={index} />
                        ))}
                    </div>
                </>

                : <h2 style={{ textAlign: 'center', marginBlock: '20px' }}>Книг не найдено</h2>
            }
        </section>);
}

export default BooksList;
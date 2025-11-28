import * as React from 'react';
import { IBookItem } from '../modules';
import MyButton from './UI/button/MyButton';

interface IPropsBookItem extends IBookItem {
    number: number
}

function BookItem(book: IPropsBookItem) {
    return (
        <article className='book'>
            <div className="book__container">
                <p>{book.number + 1}</p>
                <div className="book__text">
                    <h3>{book.name} id: {book.id}</h3>
                    <p>{book.descr}</p>
                </div>  
            </div>
            <MyButton>Удалить</MyButton>
        </article>);
}

export default BookItem;
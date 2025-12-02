import * as React from 'react';
import { IBookItem } from '../modules';
import MyButton from './UI/button/MyButton';

interface IPropsBookItem extends IBookItem {
    number: number,
    onDelete: (book: IBookItem) => void
}

function BookItem({onDelete, number, ...book}: IPropsBookItem) {
    return (
        <article className='book'>
            <div className="book__container">
                <p>{number + 1}</p>
                <div className="book__text">
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>Количество страниц: {book.pageCount}</p>
                    {/* <p>{book.publishDate.getDate()}</p> */}
                </div>  
            </div>
            <MyButton onClick={() => onDelete(book)}>Удалить</MyButton>
        </article>);
}

export default BookItem;
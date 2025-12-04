import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { IBookItem } from "../modules";

type BooksFormProps = {
    create: (book: IBookItem) => void;
};

function BooksForm({ create }: BooksFormProps) {
    const [book, setBook] = useState({ title: '', description: '', excerpt: '', pageCount: 0, publishDate: new Date() });

    const addBook = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newBook = {
            ...book,
            id: Date.now()
        };
        create(newBook);
        setBook({ title: '', description: '', excerpt: '', pageCount: 0, publishDate: new Date() });
    };

    return (
        <>
            <h3 style={{ marginBottom: "20px", textAlign: 'center' }}>Создать книгу</h3>
            <form className="form" onSubmit={addBook}>
                <MyInput
                    required
                    placeholder="Название"
                    value={book.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setBook({ ...book, title: e.target.value })
                    }
                />

                <MyInput
                    required
                    placeholder="Описание"
                    value={book.description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setBook({ ...book, description: e.target.value })
                    }
                />

                <MyInput
                    placeholder="Отрывок"
                    value={book.excerpt}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setBook({ ...book, excerpt: e.target.value })
                    }
                />

                <input
                    style={{fontFamily: 'Montserrat'}}
                    type='number'
                    id="number"
                    min={0}
                    value={book.pageCount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setBook({ ...book, pageCount: Number(e.target.value) })
                    }
                />
                <MyButton type="submit">Создать</MyButton>
            </form>
        </>
    );
}

export default BooksForm;

import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { IBookItem } from "../modules";

type BooksFormProps = {
    create: (book: IBookItem) => void;
};

function BooksForm({ create }: BooksFormProps) {
    const [book, setBook] = useState({ name: '', descr: '' });

    const addBook = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newBook = {
            ...book,
            id: Date.now()
        };
        create(newBook);
        setBook({ name: '', descr: '' });
    };

    return (
        <>
            <h3 style={{marginBottom: "20px", textAlign: 'center'}}>Создать пользователя</h3>
            <form className="form" onSubmit={addBook}>
                <MyInput
                    required
                    placeholder="Название"
                    value={book.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setBook({ ...book, name: e.target.value })
                    }
                />

                <MyInput
                    required
                    placeholder="Описание"
                    value={book.descr}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setBook({ ...book, descr: e.target.value })
                    }
                />

                <MyButton type="submit">Создать</MyButton>
            </form>
        </>
    );
}

export default BooksForm;

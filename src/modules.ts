export interface IPropsBooksList{
    books: IBookItem[],
    title: string,
    onDelete: (book: IBookItem) => void
}

export interface IBookItem{
    id: number,
    name: string,
    descr: string
}

export type SortKeys = 'name' | 'descr';
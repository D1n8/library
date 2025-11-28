export interface IPropsBooksList{
    books: IBookItem[],
    title: string
}

export interface IBookItem{
    id: number,
    name: string,
    descr: string
}
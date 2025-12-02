export interface IPropsBooksList{
    books: IBookItem[],
    title: string,
    onDelete: (book: IBookItem) => void
}

export interface IBookItem{
    id: number,
    title: string,
    description: string,
    excerpt: string,
    pageCount: number,
    publishDate: Date
}

export type SortKeys = 'title' | 'description';

export interface IFilter {
  sort: SortKeys | '',
  query: string
}
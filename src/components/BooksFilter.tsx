import * as React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';
import { IFilter } from '../modules';

interface IBooksFilterProps{
    filter: IFilter,
    setFilter: (arg: IFilter) => void
}

function BooksFilter({filter, setFilter}: IBooksFilterProps) {
    return (
        <div style={{marginBottom: 20}} className="filters">
            <MySelect
                value={filter.sort}
                onChange={selected => setFilter({ ...filter, sort: selected })}
                defaultValue={'Сортировка'}
                options={[{ name: 'По названию', value: 'title' }, { name: 'По описанию', value: 'description' }]} />
            <MyInput
                placeholder={'Поиск...'}
                value={filter.query}
                onChange={(e: any) => setFilter({ ...filter, query: e.target.value })} />
        </div>
    )
}

export default BooksFilter;
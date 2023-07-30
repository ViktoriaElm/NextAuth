
import { nanoquery } from '@nanostores/query';
import { useStore } from '@nanostores/react';

import { columns } from '../datatypes/users';
import VacancyTHead from '../components/headers/VacancyTHead';
import TBody from '../components/TBody.js'
// import InputBtns from '../components/InputBtns.js'
import Loading from '../components/Loading.js'

const
    [createFetcherStore] = nanoquery(
        { fetcher: (...keys) => fetch(keys.join('')).then(r => r.json()), }),
    $users = createFetcherStore(['/api/base/vacancies']);

export default function Vacancy() {
    const
        { data: rows, loading, error } = useStore($users);
    if (error) return <>Error={error}</>;
    if (rows) return <div className='admin-container'>
        {/* <InputBtns /> */}
        <table className='admin-table'>
            {Array.isArray(rows) && <VacancyTHead {...{ columns, rows }} />}
            {Array.isArray(rows) && <TBody {...{ columns, rows }} />}
        </table>
    </div>;
    if (loading) return <h4 className='admin-title'><Loading/>{loading}</h4>;
}
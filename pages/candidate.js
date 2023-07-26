
import { nanoquery } from '@nanostores/query';
import { useStore } from '@nanostores/react';

import { columns } from '../datatypes/users';
import CandidateTHead from '../components/headers/CandidateTHead';
import TBody from '../components/TBody.js'
import InputBtns from '../components/InputBtns.js'
import Loading from '../components/Loading.js'

const
    [createFetcherStore] = nanoquery(
        { fetcher: (...keys) => fetch(keys.join('')).then(r => r.json()), }),
    $users = createFetcherStore(['/api/base/candidates']);

export default function Candidate() {
    const
        { data: rows, loading, error } = useStore($users);
    if (error) return <>Error={error}</>;
    if (rows) return <div className='admin-container'>
        <InputBtns />
        <table className='admin-table'>
            {Array.isArray(rows) && <CandidateTHead {...{ columns, rows }} />}
            {Array.isArray(rows) && <TBody {...{ columns, rows }} />}
        </table>
    </div>;
    if (loading) return <><Loading/>{loading}</>
}
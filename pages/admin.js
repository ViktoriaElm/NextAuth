
import { nanoquery } from '@nanostores/query';
import { useStore } from '@nanostores/react';

import { columns } from '../datatypes/users';
import AdminTHead from '../components/AdminTHead';
import TBody from '../components/TBody.js'

const
    [createFetcherStore] = nanoquery(
        { fetcher: (...keys) => fetch(keys.join('')).then(r => r.json()), }),
    $users = createFetcherStore(['/api/admin/users']);

export default function Admin() {
    const
        { data: rows, loading, error } = useStore($users);
    if (error) return <>Error={error}</>;
    if (rows) return <div className='admin-container'>
    <h4 className='admin-title'>Вам присвоена роль администратора</h4>
        <table className='admin-table'>
            {Array.isArray(rows) && <AdminTHead {...{ columns, rows }} />}
            {Array.isArray(rows) && <TBody {...{ columns, rows }} />}
        </table>
    </div>;
    if (loading) return <h4 className='admin-title'>Проверка прав, подождите...{loading}</h4>;
}

import { nanoquery } from '@nanostores/query';
import { useStore } from '@nanostores/react';

import { columns } from '../datatypes/users';
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
            <thead className='admin-table'>
                <tr className='admin-table'>
                    <th>ID</th>
                    <th>Аватар</th>
                    <th>Имя пользователя</th>
                    <th>E-mail</th>
                    <th>Телефон</th>
                    <th>Telegram</th>
                    <th>E-mail для верификации</th>
                    <th>Роль пользователя</th>
                </tr>
            </thead>
            {rows && Array.isArray(rows) && <TBody {...{ columns, rows }} />}
        </table>
    </div>;
    if (loading) return (<>

        <h4 className='admin-title'>Проверка прав, подождите...{loading}</h4>
    </>);
}
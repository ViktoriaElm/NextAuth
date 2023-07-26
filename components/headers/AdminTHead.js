
export default function THead(){
    return <thead className='admin-table'>
        <tr className='admin-table'>
            <th>ID</th>
            <th>Имя пользователя</th>
            <th>E-mail</th>
            <th>E-mail для верификации</th>
            <th>Аватар</th>
            <th>Роль пользователя</th>
        </tr>
    </thead>;
};
export default function CandidateTHead({sortCandidates}) {
    return(<>
    <thead className='admin-table'>
                    <tr className='admin-table'>
                        <th onClick={_ => { sortCandidates('lastName') }}>ФИО</th>
                        <th>Вакансия</th>
                        <th onClick={sortCandidates}>Город</th>
                        <th onClick={_ => { sortCandidates('phoneNumber') }}>Телефон</th>
                        <th onClick={_ => { sortCandidates('email') }}>E-mail</th>
                        <th>Статус</th>
                        <th>Комментарий</th>
                    </tr>
                </thead>
    </>)
}
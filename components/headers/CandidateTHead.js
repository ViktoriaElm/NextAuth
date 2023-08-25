export default function CandidateTHead({sortCandidates}) {
    return(<>
    <thead className='admin-table'>
                    <tr className='admin-table'>
                        <th onClick={_ => { sortCandidates('lastName') }}>ФИО ◦</th>
                        <th onClick={_ => { sortCandidates('vacancy') }}>Вакансия ◦</th>
                        <th onClick={_ => { sortCandidates('address') }}>Город ◦</th>
                        <th>Телефон</th>
                        <th>E-mail</th>
                        <th>Статус</th>
                        <th>Комментарий</th>
                    </tr>
                </thead>
    </>)
}
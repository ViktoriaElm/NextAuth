
export default function ReadOnlyVacancy({ selectedVacancy }) {
    return (<>
        <tr>
            <td >
                <h3>{selectedVacancy.title}</h3>
            </td>

        </tr>
        <tr>
        
            <td>
            <h5>Зарплата от:&nbsp;</h5>
                <h4>{selectedVacancy.salaryFrom}</h4>
            </td>
        </tr>
        <tr>
        
            <td>
            <h5>Зарплата до:&nbsp;</h5>
                <span>{selectedVacancy.salaryTo}</span>
            </td>
        </tr>
        <tr>
            <td>
                <h5>Необходимо будет делать:&nbsp;</h5>
                <a href="https://t.me/">
                    <span>{selectedVacancy.duties}</span>
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <h5>Ожидают следующий опыт:&nbsp;</h5>
                <span>{selectedVacancy.requirement}</span>
            </td>
        </tr>
        <tr>
        <h5>Компания предлагает:&nbsp;</h5>
            <td>
                <a>{selectedVacancy.conditions}</a>
            </td>
        </tr>
    </>)
}
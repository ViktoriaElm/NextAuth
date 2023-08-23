import { useEffect, useState } from "react";
import { Fragment } from "react";
import SearchPanel from '../SearchPanel';
import VacancyTHead from '../headers/VacancyTHead';

export default function Vacancies({handleChange, setModalAdd}) {
    const [vacancies, setVacancies] = useState([]);
    const [value, setValue] = useState('');

    const api = '/api/restricted/vacancy'; // раскладываем по трем папкам - админ (есть), кандидаты, вакансии. Все в рестриктед.

    const vacancieFetch = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            if (response.ok && !data?.error) setVacancies(data); // проверка, что респонз ок, и дата не содержит эррор
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        vacancieFetch()
    }, [])

    const sortVacancies = (coll) => {
        let copyVacancies = vacancies.concat();
        const sortVacancies = copyVacancies.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
        setVacancies(sortVacancies)
    }
    console.debug('vacancies=', vacancies);
    const filteredVacancies = Array.isArray(vacancies) ? vacancies?.filter(vacancy => {
        return (
            !value
            || vacancy?.title?.toLowerCase().includes(value.toLocaleLowerCase())
            || vacancy?.salaryFrom?.toLowerCase().includes(value.toLocaleLowerCase())
            || vacancy?.salaryTo?.toLowerCase().includes(value.toLocaleLowerCase())
            || vacancy?.duties?.toLowerCase().includes(value.toLocaleLowerCase())
            || vacancy?.requirement?.toLowerCase().includes(value.toLocaleLowerCase())
            || vacancy?.conditions?.toLowerCase().includes(value.toLocaleLowerCase())
        );
    }) : [];



    return (<>
        <div class="main-top">
            <SearchPanel handleChange={handleChange} setModalAdd={setModalAdd} />
           
        </div>
        <div class="div-table">
            <table>
                <VacancyTHead sortVacancies={sortVacancies} />

                {filteredVacancies && filteredVacancies.map((vacancy) => (

                    <Fragment key={vacancy.id}>
                        <tr key={vacancy.id} onClick={() => { setModalActive(true) }}>
                                <td onClick={() => vacancies.map(vacancy)} className="td-base">
                                    {vacancy && vacancy.title}
                                </td>
                                <td onClick={() => setSelectedVacancy(vacancy)} className="td-base">
                                    { vacancy && vacancy.salaryFrom}
                                </td>
                                <td onClick={() => setSelectedVacancy(vacancy)} className="td-base">
                                    {vacancy && vacancy.salaryTo}
                                </td>
                                <td onClick={() => setSelectedVacancy(vacancy)} className="td-base">
                                    {vacancy && vacancy.duties}
                                </td>
                                <td onClick={() => setSelectedVacancy(vacancy)} className="status td-base">
                                {vacancy && vacancy.requirement}
                                </td>
                                <td onClick={() => setSelectedVacancy(vacancy)} className="comment td-base">
                                    {vacancy && vacancy.conditions}
                                </td>
                            </tr>
                    </Fragment>
                ))}
            </table>
        </div>
    </>)
}
import Vacancies from "../../../components/vacancies/Vacancies";

export default function Vacancy() {
    return(<>
    <div className='admin-container'>
        <table className='admin-table'>
        <Vacancies/>
        </table>
    </div>
    </>);
}
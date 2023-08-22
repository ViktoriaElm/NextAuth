// import { statuses } from "../ModalStatusRow"

export default function FilteredCandidates({ setModalActive, setSelectedCandidate, candidate }) {
    return (<>
        <tr onClick={() => setSelectedCandidate(candidate)} >
            <td onClick={() => {
                setModalActive(true);
                // setSelectedCandidate(candidate);
            }}
                className="td-base">
                {candidate.lastName} {candidate && candidate.firstName}
            </td>
            <td onClick={() => {
                setModalActive(true);
                // setSelectedCandidate(candidate);
            }}
                className="td-base">
                вакансия
            </td>
            <td onClick={() => {
                setModalActive(true);
                // setSelectedCandidate(candidate);
            }} className="td-base">
                {candidate.address}
            </td>
            <td className="td-base">
                {candidate.phoneNumber}
            </td>
            <td className="td-base">
                {candidate.email}
            </td>
            <td onClick={() => {
                setModalActive(true);
                // setSelectedCandidate(candidate);
            }} className="status td-base">
               {/* {statuses} */}
               Статус
            </td>
            <td 
            // onClick={() => setSelectedCandidate(candidate)} 
            className="comment td-base">
                {candidate.comment}
            </td>
        </tr>
    </>)
}
// import { statuses } from "../ModalStatusRow"

export default function FilteredCandidates({ setModalActive, setSelectedCandidate, candidate }) {
    return (<tbody>
        <tr onClick={() => setSelectedCandidate(candidate)} >
            <td onClick={() => {
                setModalActive(true);
            }}
                className="td-base">
                {candidate.lastName} {candidate && candidate.firstName}
            </td>
            <td onClick={() => {
                setModalActive(true);
            }}
                className="td-base">
                {candidate.vacancy}
            </td>
            <td onClick={() => {
                setModalActive(true);
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
            }} className="status td-base">
                {candidate.statusCandidate}
            </td>
            <td
                className="comment td-base">
                {candidate.comment}
            </td>
        </tr>
    </tbody>)
}
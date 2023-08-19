export default function FilteredCandidates({setModalActive, setSelectedCandidate, candidate}) {
    return(<>
    <tr onClick={() => { setModalActive(true) }}>
                            <td onClick={() => {
                                setSelectedCandidate(candidate)}}
                                className="td-base">
                                {candidate && candidate.lastName} {candidate && candidate.firstName}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                вакансия
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                {candidate && candidate.address}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                {candidate && candidate.phoneNumber}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                {candidate && candidate.email}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="status td-base">
                                статус
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="comment td-base">
                                {candidate && candidate.comment}
                            </td>
                        </tr>
    </>)
}
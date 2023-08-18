export default function FilteredCandidates({setModalActive, setSelectedCandidate, candidate}) {
    return(<>
    <tr onClick={() => { setModalActive(true) }}>
                            <td onClick={() => {
                                setSelectedCandidate(candidate)}}
                                className="td-base">
                                {candidate && candidate.lastName} {candidate.firstName}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                вакансия
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                {candidate.address}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                {candidate.phoneNumber}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="td-base">
                                {candidate.email}
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="status td-base">
                                статус
                            </td>
                            <td onClick={() => setSelectedCandidate(candidate)} className="comment td-base">
                                {candidate.comment}
                            </td>
                        </tr>
    </>)
}
import { useState } from "react"
import { StatusCandidate as PrismaStatusCandidate } from "../prisma/Enums"

export default function ModalStatusRow(props) {

    const defaultCandidate = {
        id: "",
        address: "",
        lastName: "",
        firstName: "",
        vacancy: "",
        email: "",
        phoneNumber: "",
        telegram: "",
        urls: "",
        profile: "",
        experience: "",
        education: "",
        skills: "",
        languages: "",
        projects: "",
        sertificates: "",
        hobby: "",
        comment: "",
        statusCandidate: "",
    };

    const { candidates, setCandidates, selectedCandidate, setSelectedCandidate } = props;
    const [selectedValue, setSelectedValue] = useState(PrismaStatusCandidate.new);
    const [editingComment, setEditingComment] = useState(false);
    const [editedComment, setEditedComment] = useState(defaultCandidate);

    const api = '/api/restricted/candidate';

    const handleEditCommentClick = (candidate) => {
        setEditingComment(true);
        setEditedComment({
            id: candidate.id,
            address: candidate.address,
            lastName: candidate.lastName,
            firstName: candidate.firstName,
            email: candidate.email,
            phoneNumber: candidate.phoneNumber,
            telegram: candidate.telegram,
            urls: candidate.urls,
            profile: candidate.profile,
            experience: candidate.experience,
            education: candidate.education,
            skills: candidate.skills,
            languages: candidate.languages,
            projects: candidate.projects,
            sertificates: candidate.sertificates,
            hobby: candidate.hobby,
            comment: candidate.comment,
            statusCandidate: candidate.statusCandidate,
        });
    };

    const handleSaveCommentClick = () => {
        if (editingComment) {
            fetch(`${api}/${editedComment.id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(editedComment)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Error updating comment');
                    }
                })
                .then(() => {
                    setCandidates(candidates.map(candidate => candidate.id === editedComment.id ? editedComment : candidate));
                    setSelectedCandidate(editedComment)
                    setEditingComment(false);
                })
                .catch(error => console.log(error));
        } else {
            fetch(`/candidate`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(editedComment)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Error creating candidate');
                    }
                })
                .then(() => {
                    setCandidates([...candidates]);
                    setEditedComment(defaultCandidate);
                })
                .catch(error => console.log(error));
        }
    };

    const statuses = Object.values(PrismaStatusCandidate).map((value) => (
        <option key={value} value={value}>{value}</option>
    ));

    const handleItemClick = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <div className="input-status-row">
                <div className="input-status-td">

                    <select
                        type="text"
                        value={selectedValue}
                        className="input-status"
                        onChange={handleItemClick}
                    >
                        {statuses}
                    </select>

                    <div
                        className="head-candidate input-fullname"
                        onDoubleClick={() => handleEditCommentClick(selectedCandidate)}>
                        {!editingComment && !selectedCandidate.comment ? (
                                <input className='edit-input' placeholder='Добавьте комментарий...' onClick={() => handleEditCommentClick(selectedCandidate)} />
                        ) : ('')}

                        {editingComment && editedComment.id === selectedCandidate.id ? (
                            <input
                                className='edit-input comment'
                                type="text"
                                value={editedComment.comment}
                                placeholder='Добавьте комментарий...'
                                onChange={e => setEditedComment({ ...editedComment, comment: e.target.value })} />
                        ) : selectedCandidate.comment !== '' && <span className="span-comment">{selectedCandidate.comment}</span>}
                        {editingComment && editedComment.id === selectedCandidate.id ? (
                            <>
                                <button className="save btn-comment"
                                    onClick={handleSaveCommentClick}>✔</button>
                                <button className="cancel btn-comment"
                                    onClick={() => setEditingComment(false)}>✘</button>
                            </>
                        ) : ('')}
                    </div>

                </div>

                <div className='edit-buttons'>
                </div>
            </div>
        </>
    )
}

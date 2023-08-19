import { useEffect, useState } from "react";

import Modal from '../modal/Modal';
import AddModal from '../modal/AddModal';

import SearchPanel from '../SearchPanel';
import CandidateTHead from '../headers/CandidateTHead';

import FilteredCandidates from '../candidates/FilteredCandidates';
import AddCandidate from '../candidates/AddCandidate';
import EditModalCandidate from '../candidates/EditModalCandidate';


export default function Base() {
    const [candidates, setCandidates] = useState({
        id: "",
        address: "",
        lastName: "",
        firstName: "",
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
    });
    const [value, setValue] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [editedCandidate, setEditedCandidate] = useState({
        id: "",
        address: "",
        lastName: "",
        firstName: "",
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
        comment: ""
    });
    const [editing, setEditing] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    const api = '/api/restricted/candidate'; // раскладываем по трем папкам - админ (есть), кандидаты, вакансии. Все в рестриктед.

    const candidateFetch = async () => {
        try {
            const response = await fetch(`${api}`);
            const data = await response.json();
            if (response.ok && !data?.error) setCandidates(data); // проверка, что респонз ок, и дата не содержит эррор
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        candidateFetch()
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSaveClick();
        }
    }

    const sortCandidates = (coll) => {
        let copyCandidates = candidates.concat();
        const sortCandidates = copyCandidates.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
        setCandidates(sortCandidates)
    }
    console.debug('candidates=', candidates);
    const filteredCandidates = Array.isArray(candidates) ? candidates?.filter(candidate => {
        return (
            !value
            || candidate?.lastName?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.firstName?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.address?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.email?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.phoneNumber?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.telegram?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.profile?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.experience?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.education?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.skills?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.languages?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.projects?.toLowerCase().includes(value.toLocaleLowerCase())
        );
    }) : [];


    // редактирование
    const handleEditClick = (candidate) => {
        setEditing(true);
        setEditedCandidate({
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
            comment: candidate.comment
        });
    };

    // сохранение
    const handleSaveClick = () => {
        if (editing) {
            fetch(`${api}/${editedCandidate.id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(editedCandidate)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Error updating candidate');
                    }
                })
                .then(() => {
                    setCandidates(candidates.map(candidate => candidate.id === editedCandidate.id ? editedCandidate : candidate));
                    setSelectedCandidate(editedCandidate)
                    // setEditedCandidate({
                    //     id: "",
                    //     address: "",
                    //     lastName: "",
                    //     firstName: "+++",
                    //     email: "",
                    //     phoneNumber: "",
                    //     telegram: "",
                    //     urls: "",
                    //     profile: "",
                    //     experience: "",
                    //     education: "",
                    //     skills: "",
                    //     languages: "",
                    //     projects: "",
                    //     sertificates: "",
                    //     hobby: "",
                    //     comment: ""
                    // });
                    setEditing(false);
                })
                .catch(error => console.log(error));
        } else {
            fetch(`/candidate`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(editedCandidate)
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
                    setEditedCandidate({
                        id: "",
                        address: "",
                        lastName: "",
                        firstName: "",
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
                        comment: ""
                    });
                })
                .catch(error => console.log(error));
        }
    };

    const onAdd = async (candidate, id, address, lastName, firstName, email, phoneNumber, telegram, urls, profile, experience, education, skills, languages, projects, sertificates, hobby, comment) => {
        await fetch(`/candidate`, {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                lastName: lastName,
                firstName: firstName,
                address: address,
                email: email,
                phoneNumber: phoneNumber,
                telegram: telegram,
                urls: urls,
                profile: profile,
                experience: experience,
                education: education,
                skills: skills,
                languages: languages,
                projects: projects,
                sertificates: sertificates,
                hobby: hobby,
                comment: comment
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((res) => {
                if (res.status !== 201) {
                    return
                } else {
                    return res.json();
                }
            })
            .then((newCandidate) => {
                setCandidates((candidates) => [...candidates, newCandidate]);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (<>
        <div className="main-top">
            <SearchPanel handleChange={handleChange} setModalAdd={setModalAdd} />
            <AddModal add={modalAdd} setAdd={setModalAdd}>
                <AddCandidate onAdd={onAdd} currentCandidate={editedCandidate}/>
            </AddModal>
        </div>

        <div className="div-table">
            <table>
                <CandidateTHead sortCandidates={sortCandidates} />

                {filteredCandidates && filteredCandidates.map((candidate) => (
                    <tbody key={filteredCandidates.id}>
                        <FilteredCandidates key={filteredCandidates.id} setModalActive={setModalActive} setSelectedCandidate={setSelectedCandidate} candidate={candidate} />
                    </tbody>
                ))}
            </table>

            {selectedCandidate && (
                <Modal active={modalActive} setActive={setModalActive}>
                    <div key={selectedCandidate.id} className="cv-modal">

                        <EditModalCandidate handleSaveClick={handleSaveClick} handleKeyPress={handleKeyPress} handleEditClick={handleEditClick} selectedCandidate={selectedCandidate} editing={editing} setEditing={setEditing} editedCandidate={editedCandidate} setEditedCandidate={setEditedCandidate} />

                    </div>
                </Modal>
            )}
        </div>
    </>)
}
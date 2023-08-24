import { useEffect, useState, Fragment } from "react";
import { useSession} from "next-auth/react";


import Modal from '../modal/Modal';
import AddModal from '../modal/AddModal';

import SearchPanel from '../SearchPanel';
import CandidateTHead from '../headers/CandidateTHead';

import FilteredCandidates from '../candidates/FilteredCandidates';
import AddCandidate from '../candidates/AddCandidate';
import EditModalCandidate from '../candidates/EditModalCandidate';

export default function Base() {
    const { data: session } = useSession();
    const [value, setValue] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [candidates, setCandidates] = useState({});
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [editing, setEditing] = useState(false);
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
        comment: "",
        statusCandidate: "",
    });

    const [id, setId] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [urls, setUrls] = useState('');
    const [profile, setProfile] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [languages, setLanguages] = useState('');
    const [projects, setProjects] = useState('');
    const [sertificates, setSertificates] = useState('');
    const [hobby, setHobby] = useState('');
    const [comment, setComment] = useState('');

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

    const sortCandidates = (coll) => {
        let copyCandidates = candidates.concat();
        const sortCandidates = copyCandidates.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
        setCandidates(sortCandidates)
    }
    console.debug('before filteredCandidates, candidates=', candidates);
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
            || candidate?.comment?.toLowerCase().includes(value.toLocaleLowerCase())
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
            comment: candidate.comment,
            statusCandidate: candidate.statusCandidate,
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
                        comment: "",
                        statusCandidate: "",
                    });
                })
                .catch(error => console.log(error));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(lastName, firstName, address, phoneNumber, telegram, email, urls, profile, experience, education, skills, languages, projects, sertificates, hobby, comment);



        const candidateData = {
            // id: id,
            lastName: lastName,
            firstName: firstName,
            address: address,
            phoneNumber: phoneNumber,
            telegram: telegram,
            email: email,
            urls: urls,
            profile: profile,
            experience: experience,
            education: education,
            skills: skills,
            languages: languages,
            projects: projects,
            sertificates: sertificates,
            hobby: hobby,
            comment: comment,
            userId : session.user.id
        }

        const postCandidate = await fetch('/api/restricted/candidate', {
            
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(candidateData),
        })
            // const candidate = await fetch(api, candidateData); 
            // console.log(candidateData);
            .then(response => {
                if (response.status !== 201) {
                    return
                } else {
                    return response.json();
                }
            })
            .then((newCandidate/* пока не берем */) => {
                setCandidates((candidates) => [...candidates, candidateData]);
            })
            .catch((err) => {
                console.error('postCandidate err=',err);
            })
    }
    console.debug('Base.js render filteredCandidates=',filteredCandidates);
    return (<>
        <div className="main-top">
            <SearchPanel handleChange={handleChange} setModalAdd={setModalAdd} />
            <AddModal add={modalAdd} setAdd={setModalAdd}>

                <div className="add-modal">
                    <div className="head-candidate">
                        <h3>Добавить кандидата</h3>
                    </div>

                    <form method="post" className="add-form"
                        onSubmit={handleSubmit}>
                        <AddCandidate
                            setId={setId}
                            setLastName={setLastName}
                            setFirstName={setFirstName}
                            setAddress={setAddress}
                            setPhoneNumber={setPhoneNumber}
                            setTelegram={setTelegram}
                            setEmail={setEmail}
                            setUrls={setUrls}
                            setProfile={setProfile}
                            setExperience={setExperience}
                            setEducation={setEducation}
                            setSkills={setSkills}
                            setLanguages={setLanguages}
                            setProjects={setProjects}
                            setSertificates={setSertificates}
                            setHobby={setHobby}
                            setComment={setComment}
                        />
                    </form>
                </div>

            </AddModal>
        </div>

        <div className="div-table">
            <table>
                <CandidateTHead sortCandidates={sortCandidates} />

                {filteredCandidates && filteredCandidates.map((candidate) => (
                    <Fragment key={candidate?.id}>
                        <FilteredCandidates key={filteredCandidates.id} filteredCandidates={filteredCandidates} setModalActive={setModalActive} setSelectedCandidate={setSelectedCandidate} candidate={candidate} lastName={lastName} firstName={firstName} address={address} phoneNumber={phoneNumber} email={email} selectedCandidate={selectedCandidate} />
                    </Fragment>
                ))}
            </table>

            {selectedCandidate && (
                <Modal active={modalActive} setActive={setModalActive}>
                    <div key={selectedCandidate.id} className="cv-modal">

                        <EditModalCandidate candidates={candidates} setCandidates={setCandidates} 
                        handleSaveClick={handleSaveClick}
                            handleEditClick={handleEditClick} selectedCandidate={selectedCandidate} editing={editing} 
                            setEditing={setEditing} 
                            editedCandidate={editedCandidate} setEditedCandidate={setEditedCandidate} setSelectedCandidate={setSelectedCandidate} />

                    </div>
                </Modal>
            )}
        </div>
    </>)
}
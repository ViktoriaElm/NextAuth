import { useEffect, useState } from "react";
import { Fragment } from "react";
import Modal from '../components/modal/Modal';
import AddModal from '../components/modal/AddModal';
import AddCandidate from '../components/AddCandidate';
import SearchPanel from '../components/SearchPanel';
import CandidateTHead from '../components/headers/CandidateTHead';

export default function Base() {
    const [candidates, setCandidates] = useState([]);
    const [value, setValue] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [currentCandidate, setCurrentCandidate] = useState({
        id: "",
        address: "",
        fullName: "",
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

    const api = '/api/restricted/candidate';

    const candidateFetch = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            if (response.ok && !data?.error) setCandidates(data);
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

    // сортировка
    const sortCandidates = (coll) => {
        let copyCandidates = candidates.concat();
        const sortCandidates = copyCandidates.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
        setCandidates(sortCandidates)
    }
    console.debug('candidates=',candidates);
    const filteredCandidates = candidates.filter(candidate => { // надо переделать
        return (
            !value 
            || candidate?.fullName?.toLowerCase().includes(value.toLocaleLowerCase())
            || candidate?.address?.toLowerCase().includes(value.toLocaleLowerCase())
        );
    });

    // редактирование
    const handleEditClick = (candidate) => {
        setEditing(true);
        setCurrentCandidate({
            id: candidate.id,
            address: candidate.address,
            fullName: candidate.fullName,
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
            fetch(`${api}/${currentCandidate.id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(currentCandidate)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Error updating candidate');
                    }
                })
                .then(data => {
                    setCandidates(candidates.map(candidate => candidate.id === currentCandidate.id ? currentCandidate : candidate));
                    setCurrentCandidate({
                        id: null,
                        address: "",
                        fullName: "",
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
                    setEditing(false);
                })
                .catch(error => console.log(error));
        } else {
            fetch(api, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(currentCandidate)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Error creating candidate');
                    }
                })
                .then(data => {
                    setCandidates([...candidates]);
                    setCurrentCandidate({
                        id: null,
                        address: "",
                        fullName: "",
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

    // добавление
    const onAdd = async (address, fullName, email, phoneNumber, telegram, urls, profile, experience, education, skills, languages, projects, sertificates, hobby, comment) => {
        await fetch(``, {
            method: 'POST',
            body: JSON.stringify({
                address: address,
                fullName: fullName,
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
        <div class="main-top">
            <SearchPanel handleChange={handleChange} setModalAdd={setModalAdd} />
            <AddModal add={modalAdd} setAdd={setModalAdd}>
                <AddCandidate onAdd={onAdd} />
            </AddModal>
        </div>
        <div class="div-table">
            <table>
                <CandidateTHead sortCandidates={sortCandidates} />
                {filteredCandidates && filteredCandidates.map((candidate) => (
                    <tr key={candidate.id} onClick={() => setModalActive(true)}>
                        <td className="td-base">{candidate.fullName}</td>
                        <td className="td-base">должность</td>
                        <td className="td-base">{candidate.address}</td>
                        <td className="td-base">{candidate.phoneNumber}</td>
                        <td className="td-base">{candidate.email}</td>
                        <td className="status td-base">статус</td>
                        <td className="comment td-base">{candidate.comment}</td>
                    </tr>
                ))}
            </table>
            {selectedCandidate && (
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className="cv-modal">

                        <div className="head-candidate input-fullname"
                            onDoubleClick={() => handleEditClick(selectedCandidate)}>
                            {editing && currentCandidate.id === selectedCandidate.id ?
                                <input
                                    onKeyDown={handleKeyPress}
                                    type="text"
                                    value={currentCandidate.fullName}
                                    onChange={(e) => setCurrentCandidate({ ...currentCandidate, fullName: e.target.value })}
                                />
                                : selectedCandidate.fullName}
                        </div>
                        
                        <div className="head-candidate">
                            <h4>Frontend разработчик</h4>
                        </div>
                        <div className="head-candidate">
                            <h4>{selectedCandidate.address}</h4>
                        </div>
                        <div className="head-candidate">
                            <h5>Телефон / WhatsApp:&nbsp;</h5>
                            <span>{selectedCandidate.phoneNumber}</span>
                        </div>
                        <div className="head-candidate">
                            <h5>Telegram:&nbsp;</h5>
                            <a href="https://t.me/">
                                <span>{selectedCandidate.telegram}</span>
                            </a>
                        </div>
                        <div className="head-candidate">
                            <h5>E-mail:&nbsp;</h5>
                            <span>{selectedCandidate.email}</span>
                        </div>
                        <div className="head-candidate">
                            <a>{selectedCandidate.urls}</a>
                        </div>
                        <div className="edit-candidate">
                            <input 
                            value={value} 
                            type="text" placeholder="Статус" 
                            onChange={null}/>
                            <input 
                            value={value} 
                            type="text" 
                            placeholder="Взят на вакансию" 
                            onChange={null}/>
                            <input 
                            value={value} 
                            type="text" 
                            placeholder="Рекрутер" 
                            onChange={null}/>
                            <button>Редактировать</button>
                            <button>Прикрепить к другой вакансии</button>
                        </div>
                        <div className="discription" >
                            <h4>О себе:</h4>
                            <p>{selectedCandidate.profile}</p>
                            <h4>Опыт:</h4>
                            <p>{selectedCandidate.experience}</p>
                            <h4>Образование:</h4>
                            <p>{selectedCandidate.education}</p>
                            <h4>Навыки:</h4>
                            <p>{selectedCandidate.skills}</p>
                            <h4>Языки:</h4>
                            <p>{selectedCandidate.languages}</p>
                            <h4>Сертификаты:</h4>
                            <p>{selectedCandidate.sertificates}</p>
                            <h4>Прочее:</h4>
                            <p>{selectedCandidate.hobby}</p>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    </>)
}
import { useEffect, useState } from "react";
import { Fragment } from "react";
import Modal from '../components/modal/Modal';
import AddModal from '../components/modal/AddModal';
import AddCandidate from '../components/AddCandidate'

export default function Base() {
    const [candidates, setCandidates] = useState([]);
    const [value, setValue] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    // const handleClick = () => {
    //     setSelectedCandidate({ address, fullName, age, email, phoneNumber, telegram, urls, body, comment });
    // };

    const api = 'http://localhost:3001/candidate';

    // const candidateFetch = async () => {
    //     await fetch(api)
    //         .then((res) => res.json())
    //         .then((candidates) => setCandidates(candidates))
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    const candidateFetch = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setCandidates(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        candidateFetch()
    }, [])

    const sortCandidates = (coll) => {
        let copyCandidates = candidates.concat();
        const sortCandidates = copyCandidates.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
        setCandidates(sortCandidates)
    }

    const handleSortCity = () => {
        const sorted = [...candidates].sort((a, b) =>
            a.address.localeCompare(b.address.name)
        );
        setCandidates(sorted);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const filteredCandidates = candidates.filter(candidate => {
        return (
            candidate.fullName.toLowerCase().includes(value.toLocaleLowerCase()) ||
            candidate.address.toLowerCase().includes(value.toLocaleLowerCase())
        );
    });

    const onAdd = async (address, fullName, email, phoneNumber, telegram, urls, profile, experience, education, skills, languages, projects, sertificates, hobby, comment) => {
        await fetch('http://localhost:3001/candidate', {
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
            .then(() => {
                setCandidates((candidates) => [...candidates, candidates]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (<>

        <div class="main-top">
            <div class="main-top-input">
                <form className="form">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={value}
                        placeholder='Введите запрос...'
                        className="input-search"
                    />
                </form>
            </div>
            <div class="main-top-btns">
                <button onClick={() => setModalAdd(true)} class="btn-add"><span class="span-btn">Добавить кандидата</span></button>
                <button class="btn-add"><span class="span-btn">Добавить вакансию</span></button>
            </div>

            <AddModal add={modalAdd} setAdd={setModalAdd}>
                <AddCandidate onAdd={onAdd} />
            </AddModal>

        </div>
        <div class="div-table">
            <table>
                <thead className='admin-table'>
                    <tr className='admin-table'>
                        <th onClick={_ => { sortCandidates('lastName') }}>ФИО</th>
                        <th>Должность</th>
                        <th onClick={handleSortCity}>Город</th>
                        <th onClick={_ => { sortCandidates('phoneNumber') }}>Телефон</th>
                        <th onClick={_ => { sortCandidates('email') }}>E-mail</th>
                        <th>Статус</th>
                        <th>Комментарий</th>
                    </tr>
                </thead>

                {candidates === null ? ("Загружаю") : (filteredCandidates.map((candidate) => (
                    // eslint-disable-next-line react/jsx-key
                    <tbody key={candidate.id} onClick={() => setSelectedCandidate(candidate)}>
                        <Fragment>
                            <tr onClick={() => setModalActive(true)}>
                                <td className="td-base">{candidate.fullName}</td>
                                <td className="td-base">должность</td>
                                <td className="td-base">{candidate.address}</td>
                                <td className="td-base">{candidate.phoneNumber}</td>
                                <td className="td-base">{candidate.email}</td>
                                <td className="status td-base">статус</td>
                                <td className="comment td-base">{candidate.comment}</td>
                            </tr>
                        </Fragment>
                    </tbody>
                ))
                )}

            </table>

            {selectedCandidate && (
            <Modal active={modalActive} setActive={setModalActive}>
                    <div className="cv-modal">
                        <div className="head-candidate"><h3>{selectedCandidate.fullName}</h3></div>
                        <div className="head-candidate"><h4>Frontend разработчик</h4></div>
                        <div className="head-candidate"><h4>{selectedCandidate.address}</h4></div>
                        <div className="head-candidate"><h5>Телефон / WhatsApp:&nbsp;</h5><span>{selectedCandidate.phoneNumber}</span></div>
                        <div className="head-candidate"><h5>Telegram:&nbsp;</h5><a href="https://t.me/"><span>{selectedCandidate.telegram}</span></a></div>
                        <div className="head-candidate"><h5>E-mail:&nbsp;</h5><span>{selectedCandidate.email}</span></div>
                        <div className="head-candidate"><a>{selectedCandidate.urls}</a></div>

                        <div className="edit-candidate">
                            <input value={value} type="text" placeholder="Статус"></input>
                            <input value={value} type="text" placeholder="Взят на вакансию"></input>
                            <input value={value} type="text" placeholder="Рекрутер"></input>
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
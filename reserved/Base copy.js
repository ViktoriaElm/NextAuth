
// import { useEffect, useState } from "react";
// import { Fragment } from "react";
// import Modal from '../components/modal/Modal';

// export default function Base() {
//     const [candidates, setCandidates] = useState([]);
//     const [value, setValue] = useState('');
//     const [modalActive, setModalActive] = useState(true);
//     const [selectedCandidate, setSelectedCandidate] = useState(null);

//     // const handleClick = () => {
//     //     setSelectedCandidate({ address, fullName, age, email, phoneNumber, telegram, urls, body, comment });
//     // };

//     const api = 'http://localhost:3001/candidate';

//     const candidateFetch = async () => {
//         await fetch(api)
//             .then((res) => res.json())
//             .then((candidates) => setCandidates(candidates))
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     useEffect(() => {
//         candidateFetch()
//     }, [])

//     const sortCandidates = (coll) => {
//         let copyCandidates = candidates.concat();
//         const sortCandidates = copyCandidates.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
//         setCandidates(sortCandidates)
//     }

//     // убрать
//     const handleSortCity = () => {
//         const sorted = [...users].sort((a, b) =>
//             a.company.name.localeCompare(b.company.name)
//         );
//         setCandidates(sorted);
//     };

//     const handleChange = (e) => {
//         e.preventDefault();
//         setValue(e.target.value)
//     }

//     const filteredCandidates = candidates.filter(candidate => {
//         return candidate.lastName.toLowerCase().includes(value.toLocaleLowerCase()) ||
//             candidate.email.toLowerCase().includes(value.toLocaleLowerCase()) ||
//             // candidate.address.city.toLowerCase().includes(value.toLocaleLowerCase()) ||
//             candidate.phoneNumber.toLowerCase().includes(value.toLocaleLowerCase())
//     })

//     return (<>

//         <div class="main-top">
//             <div class="main-top-input">
//                 <form className="form">
//                     <input
//                         type="text"
//                         onChange={handleChange}
//                         value={value}
//                         placeholder='Введите запрос...'
//                         className="input-search"
//                     />
//                 </form>
//             </div>
//             <div class="main-top-btns">
//                 <button class="btn-add"><span class="span-btn">Добавить кандидата</span></button>
//                 <button class="btn-add"><span class="span-btn">Добавить вакансию</span></button>
//             </div>

//         </div>
//         <div class="div-table">
//             <table>
//                 <thead className='admin-table'>
//                     <tr className='admin-table'>
//                         <th onClick={_ => { sortCandidates('lastName') }}>ФИО</th>
//                         <th>Должность</th>
//                         <th onClick={handleSortCity}>Город</th>
//                         <th onClick={_ => { sortCandidates('phoneNumber') }}>Телефон</th>
//                         <th onClick={_ => { sortCandidates('email') }}>E-mail</th>
//                         <th>Статус</th>
//                         <th>Комментарий</th>
//                     </tr>
//                 </thead>



//                 {candidates === null ? "Загружаю" : filteredCandidates.map((candidate) => {
//                     // eslint-disable-next-line react/jsx-key
//                     return (<tbody>
//                         <Fragment>
//                             <tr onClick={() => setModalActive(true)}>
//                                 <td className="td-base">{candidate.fullName}</td>
//                                 <td className="td-base">должность</td>
//                                 <td className="td-base">{candidate.address}</td>
//                                 <td className="td-base">{candidate.phoneNumber}</td>
//                                 <td className="td-base">{candidate.email}</td>
//                                 <td className="status td-base">статус</td>
//                                 <td className="comment td-base">{candidate.comment}</td>
//                             </tr>
//                         </Fragment>

//                     </tbody>)
//                 })}

//             </table>
//             <Modal active={modalActive} setActive={setModalActive}>
//                 {candidates === null ? "Загружаю" : filteredCandidates.map((candidate) => {
//                     // eslint-disable-next-line react/jsx-key
//                     return (<div className="cv-modal">
//                         <div className="head-candidate"><h3>{candidate.fullName}</h3></div>
//                         <div className="head-candidate"><h4>Frontend разработчик</h4></div>
//                         <div className="head-candidate"><h4>{candidate.address}</h4></div>
//                         <div className="head-candidate"><h5>Телефон / WhatsApp:&nbsp;</h5><span>{candidate.phoneNumber}</span></div>
//                         <div className="head-candidate"><h5>Telegram:&nbsp;</h5><a href="https://t.me/"><span>{candidate.telegram}</span></a></div>
//                         <div className="head-candidate"><h5>E-mail:&nbsp;</h5><span>{candidate.email}</span></div>
//                         <div className="head-candidate"><a>{candidate.urls}</a></div>

//                         <div className="edit-candidate">
//                         <input value={value} type="text" placeholder="Статус"></input>
//                         <input value={value} type="text" placeholder="Взят на вакансию"></input>
//                             <input value={value} type="text" placeholder="Рекрутер"></input>
//                             <button>Редактировать</button>
//                             <button>Прикрепить к другой вакансии</button>
//                         </div>

//                         <div className="discription" >
//                             <h4>О себе:</h4>
//                             <p>{candidate.body.profile}</p>
//                             <h4>Опыт:</h4>
//                             <p>{candidate.body.experience}</p>
//                             <h4>Образование:</h4>
//                             <p>{candidate.body.education}</p>
//                             <h4>Навыки:</h4>
//                             <p>{candidate.body.skills}</p>
//                             <h4>Языки:</h4>
//                             <p>{candidate.body.languages}</p>
//                             <h4>Сертификаты:</h4>
//                             <p>{candidate.body.sertificates}</p>
//                             <h4>Прочее:</h4>
//                             <p>{candidate.body.hobby}</p>
//                         </div>
//                     </div>)
//                 })}
//             </Modal>
//         </div>
//     </>)
// }
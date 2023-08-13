import ModalStatusRow from '../ModalStatusRow'

export default function ReadOnlyCandidate({ selectedCandidate, value, handleEditDoubleClick, editing, currentCandidate, handleKeyPress, setCurrentCandidate }) {
    return (<>
        <div className="head-candidate input-fullname"
                            onDoubleClick={() => handleEditClick(selectedCandidate)}>
                            {editing && currentCandidate.id === selectedCandidate.id ?
                                <input
                                    onKeyDown={handleKeyPress}
                                    type="text"
                                    value={selectedCandidate.lastName + ' ' + selectedCandidate.firstName}
                                    onChange={(e) => setCurrentCandidate({ ...currentCandidate, lastName: e.target.value, firstName: e.target.value })}
                                />
                                : (selectedCandidate.lastName + ' ' + selectedCandidate.firstName)}
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
                                onChange={null} />
                            <input
                                value={value}
                                type="text"
                                placeholder="Взят на вакансию"
                                onChange={null} />
                            <input
                                value={value}
                                type="text"
                                placeholder="Рекрутер"
                                onChange={null} />
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
    </>)
}
import ModalStatusRow from '../ModalStatusRow'
import styles from "@/styles/editModal.module.css"

export default function EditModalCandidate({ candidates, setCandidates, handleEditClick, selectedCandidate, editing, setEditing, editedCandidate, setEditedCandidate, setSelectedCandidate, handleSaveClick }) {

    const renderInput = (isEdting, editedCandidate, field, placeholder) => {
        return (isEdting) ? (
            <input
            className={`${styles.edit_input} styles.edit_input_${field}`}
                type="text"
                value={editedCandidate[field]}
                placeholder={placeholder}
                onChange={e => setEditedCandidate({ ...editedCandidate, [field]: e.target.value })} />

        ) : selectedCandidate[field] !== '' && <h2>{selectedCandidate[field]}</h2>;
    }

    return (<>
        <div className='edit-buttons'>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}
        </div>

        {/* ------------------------------------------------- */}

        {/* див - обернуть каждую редактируемую область */}
        <div>
            <div
                className='box-edit-button'>
                {/* новая кнопка для редактирования ПДн */}
                {!editing ? (
                    <button
                        className='edit-button'
                        onClick={() => handleEditClick(selectedCandidate)}>
                        ✎
                    </button>
                ) : ('')
                }
            </div>

            <div
                className="head-candidate input-lastname"
            >
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'lastName', 'Фамилия...')}
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'firstName', 'Имя...')}
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'vacancy', 'Вакансия...')}
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'address', 'Адрес...')}
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'phoneNumber', 'Номер телефона...')}
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'telegram', 'Telegram...')}
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'email', 'Email...')}
                {renderInput(editing && editedCandidate.id === selectedCandidate.id, editedCandidate, 'urls', 'Ссылка на резюме...')}
            </div>
        </div>

        <ModalStatusRow candidates={candidates} setCandidates={setCandidates} setSelectedCandidate={setSelectedCandidate} selectedCandidate={selectedCandidate} />

        {/* Новый див для обертки описания резюме */}
        <div
            className='box-cv-discribing'>

            <div
                className='box-edit-button'>
                {!editing ? (
                    <button
                        className='edit-button'
                        onClick={() => handleEditClick(selectedCandidate)}>
                        ✎
                    </button>
                ) : ('')
                }
            </div>

            <div className='edit-buttons'>
                {editing && editedCandidate.id === selectedCandidate.id ? (
                    <>
                        <button className="save"
                            onClick={handleSaveClick}>✔</button>
                        <button className="cancel"
                            onClick={() => setEditing(false)}>✘</button>
                    </>
                ) : ('')}
            </div>

            <div className='discription-container'>
                <div
                    className="discription"
                    onDoubleClick={() => handleEditClick(selectedCandidate)}>
                    <h4>О себе:</h4>
                    {editing && editedCandidate.id === selectedCandidate.id ? (
                        <textarea
                            className='edit-input textarea'
                            type="text"
                            value={editedCandidate.profile}
                            placeholder='О кандидате...'
                            onChange={e => setEditedCandidate({ ...editedCandidate, profile: e.target.value })} />
                    ) : selectedCandidate.profile !== '' && <p>{selectedCandidate.profile}</p>}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription"
                    onDoubleClick={() => handleEditClick(selectedCandidate)}>
                    <h4>Опыт:</h4>
                    {editing && editedCandidate.id === selectedCandidate.id ? (
                        <textarea
                            className='edit-input textarea'
                            type="text"
                            value={editedCandidate.experience}
                            placeholder='Об опыте...'
                            onChange={e => setEditedCandidate({ ...editedCandidate, experience: e.target.value })} />
                    ) : selectedCandidate.experience !== '' && <p>{selectedCandidate.experience}</p>}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription"
                    onDoubleClick={() => handleEditClick(selectedCandidate)}>
                    <h4>Образование:</h4>
                    {editing && editedCandidate.id === selectedCandidate.id ? (
                        <textarea
                            className='edit-input textarea'
                            type="text"
                            cols={100}
                            value={editedCandidate.education}
                            placeholder='Об образовании...'
                            onChange={e => setEditedCandidate({ ...editedCandidate, education: e.target.value })} />
                    ) : selectedCandidate.education !== '' && <p>{selectedCandidate.education}</p>}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription"
                    onDoubleClick={() => handleEditClick(selectedCandidate)}>
                    <h4>Навыки:</h4>
                    {editing && editedCandidate.id === selectedCandidate.id ? (
                        <textarea
                            className='edit-input textarea'
                            type="text"
                            value={editedCandidate.skills}
                            placeholder='О навыках...'
                            onChange={e => setEditedCandidate({ ...editedCandidate, skills: e.target.value })} />
                    ) : selectedCandidate.skills !== '' && <p>{selectedCandidate.skills}</p>}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription"
                    onDoubleClick={() => handleEditClick(selectedCandidate)}>
                    <h4>Языки:</h4>
                    {editing && editedCandidate.id === selectedCandidate.id ? (
                        <textarea
                            className='edit-input textarea'
                            type="text"
                            value={editedCandidate.languages}
                            placeholder='Иностранные языки...'
                            onChange={e => setEditedCandidate({ ...editedCandidate, languages: e.target.value })} />
                    ) : selectedCandidate.languages !== '' && <p>{selectedCandidate.languages}</p>}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription"
                    onDoubleClick={() => handleEditClick(selectedCandidate)}>
                    <h4>Сертификаты:</h4>
                    {editing && editedCandidate.id === selectedCandidate.id ? (
                        <textarea
                            className='edit-input textarea'
                            type="text"
                            value={editedCandidate.sertificates}
                            placeholder='Сертификаты...'
                            onChange={e => setEditedCandidate({ ...editedCandidate, sertificates: e.target.value })} />
                    ) : selectedCandidate.sertificates !== '' && <p>{selectedCandidate.sertificates}</p>}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription"
                    onDoubleClick={() => handleEditClick(selectedCandidate)}>
                    <h4>Прочее:</h4>
                    {editing && editedCandidate.id === selectedCandidate.id ? (
                        <textarea
                            className='edit-input textarea'
                            type="text"
                            value={editedCandidate.hobby}
                            placeholder='Хобби...'
                            onChange={e => setEditedCandidate({ ...editedCandidate, hobby: e.target.value })} />
                    ) : selectedCandidate.hobby !== '' && <p>{selectedCandidate.hobby}</p>}
                </div>
            </div>

            {/* Конец нового дива для описания */}
        </div>
    </>)
}

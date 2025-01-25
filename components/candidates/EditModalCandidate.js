import ModalStatusRow from '../ModalStatusRow'
import styles from "@/styles/editModal.module.css"

export default function EditModalCandidate({ candidates, setCandidates, handleEditClick, selectedCandidate, editing, setEditing, editedCandidate, setEditedCandidate, setSelectedCandidate, handleSaveClick }) {

    const renderInput = (isEditing, editedCandidate, field, placeholder) => {
        return (isEditing) ? (
            <input
                className={`${styles.edit_input} styles.edit_input_${field}`}
                type="text"
                value={editedCandidate[field]}
                placeholder={placeholder}
                onChange={e => setEditedCandidate({ ...editedCandidate, [field]: e.target.value })} />

        ) : selectedCandidate[field] !== '' && <h2>{selectedCandidate[field]}</h2>;
    }

    const renderTextArea = ({ isEditing, placeholder, field, editedCandidate, selectedCandidate, setEditedCandidate }) => {
        return (isEditing ? (
            <textarea
                className='edit-input textarea'
                type="text"
                value={editedCandidate[field]}
                placeholder={placeholder}
                onChange={e => setEditedCandidate({ ...editedCandidate, [field]: e.target.value })}
            />
        ) : (selectedCandidate[field] !== '' && <p>{selectedCandidate[field]}</p>)
        )
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

        <div>
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
                >
                    <h4>О себе:</h4>
                    {renderTextArea({
                        isEditing: editing && editedCandidate.id === selectedCandidate.id,
                        placeholder: 'Введите информацию о себе...',
                        field: 'profile',
                        editedCandidate,
                        selectedCandidate,
                        setEditedCandidate
                    })}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription">
                    <h4>Опыт:</h4>
                    {renderTextArea({
                        isEditing: editing && editedCandidate.id === selectedCandidate.id,
                        placeholder: 'Введите информацию об опыте...',
                        field: 'experience',
                        editedCandidate,
                        selectedCandidate,
                        setEditedCandidate
                    })}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription">
                    <h4>Образование:</h4>
                    {renderTextArea({
                        isEditing: editing && editedCandidate.id === selectedCandidate.id,
                        placeholder: 'Введите информацию об образовании...',
                        field: 'education',
                        editedCandidate,
                        selectedCandidate,
                        setEditedCandidate
                    })}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription">
                    <h4>Навыки:</h4>
                    {renderTextArea({
                        isEditing: editing && editedCandidate.id === selectedCandidate.id,
                        placeholder: 'Введите информацию о навыках...',
                        field: 'skills',
                        editedCandidate,
                        selectedCandidate,
                        setEditedCandidate
                    })}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription">
                    <h4>Языки:</h4>
                    {renderTextArea({
                        isEditing: editing && editedCandidate.id === selectedCandidate.id,
                        placeholder: 'Введите информацию о языках...',
                        field: 'languages',
                        editedCandidate,
                        selectedCandidate,
                        setEditedCandidate
                    })}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription">
                    <h4>Сертификаты:</h4>
                    {renderTextArea({
                        isEditing: editing && editedCandidate.id === selectedCandidate.id,
                        placeholder: 'Введите информацию о сертификатах...',
                        field: 'sertificates',
                        editedCandidate,
                        selectedCandidate,
                        setEditedCandidate
                    })}
                </div>
            </div>

            <div className='discription-container'>
                <div
                    className="discription">
                    <h4>Прочее:</h4>
                    {renderTextArea({
                        isEditing: editing && editedCandidate.id === selectedCandidate.id,
                        placeholder: 'Введите иную информацию...',
                        field: 'hobby',
                        editedCandidate,
                        selectedCandidate,
                        setEditedCandidate
                    })}
                </div>
            </div>
        </div>
    </>)
}

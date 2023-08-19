import ModalStatusRow from '../ModalStatusRow'

export default function EditModalCandidate({ handleSaveClick, handleKeyPress, handleEditClick, selectedCandidate, editing, setEditing, editedCandidate, setEditedCandidate }) {
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

        <div
            className="head-candidate input-lastname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input edit-input-last'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={editedCandidate.lastName}
                    placeholder='Add last name...'
                    onChange={e => setEditedCandidate({ ...editedCandidate, lastName: e.target.value })} />

            ) : selectedCandidate.lastName !== '' && <h2>{selectedCandidate.lastName}</h2>}
        </div>

        <div
            className="head-candidate input-firstname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input edit-input-first'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={editedCandidate.firstName}
                    placeholder='Add first name...'
                    onChange={e => setEditedCandidate({ ...editedCandidate, firstName: e.target.value })} />
            ) : selectedCandidate.firstName !== '' && <h2>{selectedCandidate.firstName}</h2>}
        </div>

        <div className="head-candidate">
            <h6>Frontend разработчик</h6>
        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={editedCandidate.address}
                    placeholder='Add city...'
                    onChange={e => setEditedCandidate({ ...editedCandidate, address: e.target.value })} />
            ) : selectedCandidate.address !== '' && <h6>{selectedCandidate.address}</h6>}
        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            <h6>Телефон / WhatsApp:&nbsp;</h6>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={editedCandidate.phoneNumber}
                    placeholder='Add phone number...'
                    onChange={e => setEditedCandidate({ ...editedCandidate, phoneNumber: e.target.value })} />
            ) : selectedCandidate.phoneNumber !== '' && <h5>{selectedCandidate.phoneNumber}</h5>}
        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            <h6>Telegram:&nbsp;</h6>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={editedCandidate.telegram}
                    placeholder='Add telegram accaunt...'
                    onChange={e => setEditedCandidate({ ...editedCandidate, telegram: e.target.value })} />
            ) : selectedCandidate.telegram !== '' && <h5>{selectedCandidate.telegram}</h5>}
        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            <h6>E-mail:&nbsp;</h6>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={editedCandidate.email}
                    placeholder='Add email...'
                    onChange={e => setEditedCandidate({ ...editedCandidate, email: e.target.value })} />
            ) : selectedCandidate.email !== '' && <h5>{selectedCandidate.email}</h5>}
        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && editedCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={editedCandidate.urls}
                    placeholder='Add some link to account...'
                    onChange={e => setEditedCandidate({ ...editedCandidate, urls: e.target.value })} />
            ) : selectedCandidate.urls !== '' && <h5>{selectedCandidate.urls}</h5>}
        </div>

        <ModalStatusRow />

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
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={editedCandidate.profile}
                        placeholder='Discribe profile...'
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
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={editedCandidate.experience}
                        placeholder='Discribe experience...'
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
                        onKeyDown={handleKeyPress}
                        type="text"
                        cols={100}
                        value={editedCandidate.education}
                        placeholder='Discribe education...'
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
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={editedCandidate.skills}
                        placeholder='Discribe skills...'
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
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={editedCandidate.languages}
                        placeholder='Languages...'
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
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={editedCandidate.sertificates}
                        placeholder='Certificates...'
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
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={editedCandidate.hobby}
                        placeholder='Hobby...'
                        onChange={e => setEditedCandidate({ ...editedCandidate, hobby: e.target.value })} />
                ) : selectedCandidate.hobby !== '' && <p>{selectedCandidate.hobby}</p>}
            </div>
        </div>
    </>)
}
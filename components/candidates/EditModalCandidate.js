import ModalStatusRow from '../ModalStatusRow'

export default function EditModalCandidate({ handleSaveClick, handleKeyPress, handleEditClick, selectedCandidate, editing, setEditing, currentCandidate, setCurrentCandidate }) {
    return (<>
        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input edit-input-last'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={currentCandidate.lastName}
                    onChange={e => setCurrentCandidate({ ...currentCandidate, lastName: e.target.value })} />

            ) : selectedCandidate.lastName !== '' && <h2>{selectedCandidate.lastName}</h2>}
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}

        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input edit-input-first'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={currentCandidate.firstName}
                    onChange={e => setCurrentCandidate({ ...currentCandidate, lastName: e.target.value })} />
            ) : selectedCandidate.firstName !== '' && <h2>{selectedCandidate.firstName}</h2>}
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}

        </div>


        <div className="head-candidate">
            <h4>Frontend разработчик</h4>
        </div>


        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={currentCandidate.address}
                    onChange={e => setCurrentCandidate({ ...currentCandidate, address: e.target.value })} />
            ) : selectedCandidate.address !== '' && <h5>{selectedCandidate.address}</h5>}
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}

        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            <h4>Телефон / WhatsApp:&nbsp;</h4>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={currentCandidate.phoneNumber}
                    onChange={e => setCurrentCandidate({ ...currentCandidate, phoneNumber: e.target.value })} />
            ) : selectedCandidate.phoneNumber !== '' && <h5>{selectedCandidate.phoneNumber}</h5>}
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}

        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            <h4>Telegram:&nbsp;</h4>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={currentCandidate.telegram}
                    onChange={e => setCurrentCandidate({ ...currentCandidate, telegram: e.target.value })} />
            ) : selectedCandidate.telegram !== '' && <h5>{selectedCandidate.telegram}</h5>}
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}

        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            <h4>E-mail:&nbsp;</h4>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={currentCandidate.email}
                    onChange={e => setCurrentCandidate({ ...currentCandidate, email: e.target.value })} />
            ) : selectedCandidate.email !== '' && <h5>{selectedCandidate.email}</h5>}
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}

        </div>

        <div
            className="head-candidate input-fullname"
            onDoubleClick={() => handleEditClick(selectedCandidate)}>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <input
                    className='edit-input'
                    onKeyDown={handleKeyPress}
                    type="text"
                    value={currentCandidate.urls}
                    onChange={e => setCurrentCandidate({ ...currentCandidate, urls: e.target.value })} />
            ) : selectedCandidate.urls !== '' && <h5>{selectedCandidate.urls}</h5>}
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}

        </div>

        <ModalStatusRow />

        <div className='discription-container'>
            <div
                className="discription"
                onDoubleClick={() => handleEditClick(selectedCandidate)}>
                <h4>О себе:</h4>
                {editing && currentCandidate.id === selectedCandidate.id ? (
                    <textarea
                        className='edit-input textarea'
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={currentCandidate.profile}
                        onChange={e => setCurrentCandidate({ ...currentCandidate, profile: e.target.value })} />
                ) : selectedCandidate.profile !== '' && <p>{selectedCandidate.profile}</p>}
            </div>
            {editing && currentCandidate.id === selectedCandidate.id ? (
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
                <h4>Опыт:</h4>
                {editing && currentCandidate.id === selectedCandidate.id ? (
                    <textarea
                        className='edit-input textarea'
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={currentCandidate.experience}
                        onChange={e => setCurrentCandidate({ ...currentCandidate, experience: e.target.value })} />
                ) : selectedCandidate.experience !== '' && <p>{selectedCandidate.experience}</p>}
            </div>
            {editing && currentCandidate.id === selectedCandidate.id ? (
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
                <h4>Образование:</h4>
                {editing && currentCandidate.id === selectedCandidate.id ? (
                    <textarea
                        className='edit-input textarea'
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={currentCandidate.education}
                        onChange={e => setCurrentCandidate({ ...currentCandidate, education: e.target.value })} />
                ) : selectedCandidate.education !== '' && <p>{selectedCandidate.education}</p>}
            </div>
            {editing && currentCandidate.id === selectedCandidate.id ? (
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
                <h4>Навыки:</h4>
                {editing && currentCandidate.id === selectedCandidate.id ? (
                    <textarea
                        className='edit-input textarea'
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={currentCandidate.skills}
                        onChange={e => setCurrentCandidate({ ...currentCandidate, skills: e.target.value })} />
                ) : selectedCandidate.skills !== '' && <p>{selectedCandidate.skills}</p>}
            </div>
            {editing && currentCandidate.id === selectedCandidate.id ? (
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
                <h4>Языки:</h4>
                {editing && currentCandidate.id === selectedCandidate.id ? (
                    <textarea
                        className='edit-input textarea'
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={currentCandidate.languages}
                        onChange={e => setCurrentCandidate({ ...currentCandidate, languages: e.target.value })} />
                ) : selectedCandidate.languages !== '' && <p>{selectedCandidate.languages}</p>}
            </div>
            {editing && currentCandidate.id === selectedCandidate.id ? (
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
                <h4>Сертификаты:</h4>
                {editing && currentCandidate.id === selectedCandidate.id ? (
                    <textarea
                        className='edit-input textarea'
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={currentCandidate.sertificates}
                        onChange={e => setCurrentCandidate({ ...currentCandidate, sertificates: e.target.value })} />
                ) : selectedCandidate.sertificates !== '' && <p>{selectedCandidate.sertificates}</p>}
            </div>
            {editing && currentCandidate.id === selectedCandidate.id ? (
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
                <h4>Прочее:</h4>
                {editing && currentCandidate.id === selectedCandidate.id ? (
                    <textarea
                        className='edit-input textarea'
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={currentCandidate.hobby}
                        onChange={e => setCurrentCandidate({ ...currentCandidate, hobby: e.target.value })} />
                ) : selectedCandidate.hobby !== '' && <p>{selectedCandidate.hobby}</p>}

            </div>
            {editing && currentCandidate.id === selectedCandidate.id ? (
                <>
                    <button className="save"
                        onClick={handleSaveClick}>✔</button>
                    <button className="cancel"
                        onClick={() => setEditing(false)}>✘</button>
                </>
            ) : ('')}
        </div>
    </>)
}
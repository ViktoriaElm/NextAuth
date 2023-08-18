// новое в попап сделать


export default function AddCandidate({ onAdd, value, handleChange }) {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(
            e.target.id.value,
            e.target.lastName.value,
            e.target.firstName.value,
            e.target.address.value,
            e.target.email.value,
            e.target.phoneNumber.value,
            e.target.telegram.value,
            e.target.urls.value,
            e.target.profile.value,
            e.target.experience.value,
            e.target.education.value,
            e.target.skills.value,
            e.target.languages.value,
            e.target.projects.value,
            e.target.sertificates.value,
            e.target.hobby.value,
            e.target.comment.value);

            // e.target.id.value = "";
        e.target.lastName.value = "";
        e.target.firstName.value = "";
        e.target.address.value = "";
        e.target.email.value = "";
        e.target.phoneNumber.value = "";
        e.target.telegram.value = "";
        e.target.urls.value = "";
        e.target.profile.value = "";
        e.target.experience.value = "";
        e.target.education.value = "";
        e.target.skills.value = "";
        e.target.languages.value = "";
        e.target.projects.value = "";
        e.target.sertificates.value = "";
        e.target.hobby.value = "";
        e.target.comment.value = "";

    }
    // console.log(handleOnSubmit);

    return (<>
        <div className="add-modal">
            <div className="head-candidate">
                <h3>Добавить кандидата</h3>
            </div>

            <form className="add-form" onSubmit={handleOnSubmit}>
                <div className="add-candidate">
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="lastName"
                        placeholder='Фамилия'
                    />
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="firstName"
                        placeholder='Имя'
                    />
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="address"
                        placeholder='Город проживания'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input"
                        type="tel"
                        value={value}
                        onChange={handleChange}
                        name="phoneNumber"
                        placeholder='Телефон'
                    />
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="telegram"
                        placeholder='Телеграм'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="email"
                        placeholder='E-mail'
                    />
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="urls"
                        placeholder='URLs'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="profile"
                        placeholder='О себе:'
                    />
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="experience"
                        placeholder='Опыт:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="education"
                        placeholder='Образование:'
                    />
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="skills"
                        placeholder='Навыки:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="languages"
                        placeholder='Языки:'
                    />
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="projects"
                        placeholder='Проекты:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="sertificates"
                        placeholder='Сертификаты:'
                    />
                    <input className="add-input text"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="hobby"
                        placeholder='Прочее:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input comment"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="comment"
                        placeholder='Комментарии:'
                    />
                </div>
                <div className="add-candidate">
                    <button onSubmit={handleOnSubmit} className="add-button" type="submit">Сохранить кандидата</button>
                </div>
            </form>

        </div>
    </>)
}
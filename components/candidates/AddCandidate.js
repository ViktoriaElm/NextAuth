
export default function AddCandidate(props) {

    const {
        setLastName, setFirstName, setAddress, setVacancy, setPhoneNumber, setTelegram, setEmail, setUrls, setProfile, setExperience, setEducation, setSkills, setLanguages, setProjects, setSertificates, setHobby, setComment, lastName, firstName, address, comment, hobby, sertificates, projects, languages, skills, education, experience, profile, urls, email, telegram, phoneNumber, vacancy
    } = props;

    return (<>
        <div className="add-candidate">
            <input className="add-input"
                type="text"
                value={lastName}
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Фамилия'
            />
            <input className="add-input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                placeholder='Имя'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                placeholder='Город проживания'
            />
            <input className="add-input"
                type="text"
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
                name="vacancy"
                placeholder='Вакансия'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phoneNumber"
                placeholder='Телефон'
            />
            <input className="add-input"
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                name="telegram"
                placeholder='Телеграм'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='E-mail'
            />
            <input className="add-input"
                type="text"
                value={urls}
                onChange={(e) => setUrls(e.target.value)}
                name="urls"
                placeholder='URLs'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input text"
                type="text"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                name="profile"
                placeholder='О себе:'
            />
            <input className="add-input text"
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                name="experience"
                placeholder='Опыт:'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input text"
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                name="education"
                placeholder='Образование:'
            />
            <input className="add-input text"
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                name="skills"
                placeholder='Навыки:'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input text"
                type="text"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                name="languages"
                placeholder='Языки:'
            />
            <input className="add-input text"
                type="text"
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
                name="projects"
                placeholder='Проекты:'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input text"
                type="text"
                value={sertificates}
                onChange={(e) => setSertificates(e.target.value)}
                name="sertificates"
                placeholder='Сертификаты:'
            />
            <input className="add-input text"
                type="text"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
                name="hobby"
                placeholder='Прочее:'
            />
        </div>
        <div className="add-candidate">
            <input className="add-input comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                name="comment"
                placeholder='Комментарии:'
            />
        </div>
        <div className="add-candidate">
            <button className="add-button" type="submit">Сохранить кандидата</button>
        </div>
    </>)
}
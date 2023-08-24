
export default function AddCandidate(props) {

    const {setLastName, setFirstName, setAddress,setPhoneNumber, setTelegram, setEmail, setUrls, setProfile, setExperience, setEducation, setSkills, setLanguages, setProjects, setSertificates, setHobby, setComment } = props;

    return (<>
           
                <div className="add-candidate">
                    <input className="add-input"
                        type="text"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Фамилия'
                    />
                    <input className="add-input"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        name="firstName"
                        placeholder='Имя'
                    />
                    <input className="add-input"
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        name="address"
                        placeholder='Город проживания'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input"
                        type="tel"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        name="phoneNumber"
                        placeholder='Телефон'
                    />
                    <input className="add-input"
                        type="text"
                        onChange={(e) => setTelegram(e.target.value)}
                        name="telegram"
                        placeholder='Телеграм'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder='E-mail'
                    />
                    <input className="add-input"
                        type="text"
                        onChange={(e) => setUrls(e.target.value)}
                        name="urls"
                        placeholder='URLs'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setProfile(e.target.value)}
                        name="profile"
                        placeholder='О себе:'
                    />
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setExperience(e.target.value)}
                        name="experience"
                        placeholder='Опыт:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setEducation(e.target.value)}
                        name="education"
                        placeholder='Образование:'
                    />
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setSkills(e.target.value)}
                        name="skills"
                        placeholder='Навыки:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setLanguages(e.target.value)}
                        name="languages"
                        placeholder='Языки:'
                    />
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setProjects(e.target.value)}
                        name="projects"
                        placeholder='Проекты:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setSertificates(e.target.value)}
                        name="sertificates"
                        placeholder='Сертификаты:'
                    />
                    <input className="add-input text"
                        type="text"
                        onChange={(e) => setHobby(e.target.value)}
                        name="hobby"
                        placeholder='Прочее:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input comment"
                        type="text"
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
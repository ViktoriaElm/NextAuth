// новое в попап сделать


export default function AddCandidate() {
    return(<>
    <h5>Добавить кандидата</h5>
                    <form className="add-form">
                        <input className="add-input"
                            type="text"
                            name="Name"
                            placeholder='Имя'
                        />
                        <input className="add-input"
                            type="email"
                            name="email"
                            placeholder='Email'
                        />
                        <input className="add-input"
                            type="text"
                            name="adress"
                            placeholder='Адрес'
                        />
                        <input className="add-input"
                            type="tel"
                            name="phone"
                            placeholder='Телефон'
                        />
                        <input className="add-input"
                            type="text"
                            name="company"
                            placeholder='Компания'
                        />
                        <input className="add-input"
                            type="text"
                            name="website"
                            placeholder='Другое'
                        />
                        <button className="add-button" type="submit">Добавить кандидата</button>
                    </form>
    </>)
}
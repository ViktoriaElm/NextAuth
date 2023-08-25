export default function SearchPanel({ handleChange, setModalAdd, value }) {
    return (<>
        <div className="main-top-input">
            <form className="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={value}
                    placeholder='Введите запрос...'
                    className="input-search"
                />
            </form>
        </div>
        <div className="main-top-btns">
            <button onClick={() => setModalAdd(true)} className="btn-add"><span className="span-btn">Добавить кандидата</span></button>
            <button className="btn-add"><span className="span-btn">Добавить вакансию</span></button>
        </div>
    </>)
}
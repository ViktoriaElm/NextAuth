export default function SearchPanel({handleChange, setModalAdd, value}) {
    return(<>
    <div class="main-top-input">
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
            <div class="main-top-btns">
                <button onClick={() => setModalAdd(true)} class="btn-add"><span class="span-btn">Добавить кандидата</span></button>
                <button class="btn-add"><span class="span-btn">Добавить вакансию</span></button>
            </div>
    </>)
}
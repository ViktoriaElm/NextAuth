// новое в попап сделать


export default function AddVacancy({ onAdd, value, handleChange }) {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(
            e.target.title.value,
            e.target.salaryFrom.value,
            e.target.salaryTo.value,
            e.target.duties.value,
            e.target.requirement.value,
            e.target.conditions.value);

        e.target.title.value = "";
        e.target.salaryFrom.value = "";
        e.target.salaryTo.value = "";
        e.target.duties.value = "";
        e.target.requirement.value = "";
        e.target.conditions.value = "";

    }
    // console.log(handleOnSubmit);

    return (<>
        <div className="add-modal">
            <div className="head-candidate">
                <h3>Добавить вакансию</h3>
            </div>

            <form className="add-form" onSubmit={handleOnSubmit}>
                <div className="add-candidate">
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="title"
                        placeholder='Название вакансии'
                    />
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="salaryFrom"
                        placeholder='Зараплата от:'
                    />
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="salaryTo"
                        placeholder='Зарплата до:'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input"
                        type="tel"
                        value={value}
                        onChange={handleChange}
                        name="duties"
                        placeholder='Обязанности'
                    />
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="requirement"
                        placeholder='Требования'
                    />
                </div>
                <div className="add-candidate">
                    <input className="add-input"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="conditions"
                        placeholder='Условния'
                    />
                </div>
                <div className="add-candidate">
                    <button onSubmit={handleOnSubmit} className="add-button" type="submit">Сохранить вакансию</button>
                </div>
            </form>

        </div>
    </>)
}
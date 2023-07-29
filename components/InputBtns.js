import { useEffect, useState } from "react";

export default function InputBtns() {

    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    return (<>
    <div class="main-top">
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
                {/* при клике на кнопку попап */}
                <button class="btn-add"><span class="span-btn">Добавить кандидата</span></button>
                {/* при клике на кнопку попап */}
                <button class="btn-add"><span class="span-btn">Добавить вакансию</span></button>
            </div>
            
    </div>
    </>)
}
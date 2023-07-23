import { useState } from "react";

export default function Input() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
      }

    return (<div>
      <form >
        <input
          type="text"
          onChange={handleChange}
          value={value}
          placeholder='Введите запрос...'
          className="input-search"
        />
      </form>
    </div>)
}




//перенесено законектить
export default function ModalStatusRow({value}) {
    return(<>
     <tr>
                    <td>
                        <input
                            value={value}
                            type="text" placeholder="Статус"
                            onChange={null} />
                    
                        <input
                            value={value}
                            type="text"
                            placeholder="Взят на вакансию"
                            onChange={null} />
               
                        <input
                            value={value}
                            type="text"
                            placeholder="Рекрутер"
                            onChange={null} />
                    
                        <button>Редактировать</button>
                    
                        <button>Прикрепить к другой вакансии</button>
                    </td>
                </tr></>)
}
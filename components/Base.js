/* eslint-disable react/jsx-no-comment-textnodes */

import { useEffect, useState } from "react";
import { Fragment } from "react";
import AddCandidate from "./AddCandidate";
// import Input from "../components/__Input"


export default function Base() {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');
    const [editUserId, setEditUserId] = useState(null);

    const api = 'https://jsonplaceholder.typicode.com/users';

    const userFetch = async () => {
        await fetch(api)
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        userFetch()
    }, [])

    const sortUsers = (coll) => {
        let copyUsers = users.concat();
        const sortUsers = copyUsers.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
        setUsers(sortUsers)
    }

    const handleSortCity = () => {
        const sorted = [...users].sort((a, b) =>
            a.company.name.localeCompare(b.company.name)
        );
        setUsers(sorted);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.email.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.address.city.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.phone.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.website.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.company.name.toLowerCase().includes(value.toLocaleLowerCase())
    })

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
        <div class="div-table">
            <table>

                <thead>
                    <tr>
                        <th onClick={_ => { sortUsers('name') }}>ФИО</th>
                        <th>Должность</th>
                        <th onClick={handleSortCity}>Город</th>
                        <th onClick={_ => { sortUsers('phone') }}>Телефон</th>
                        <th onClick={_ => { sortUsers('email') }}>Email</th>
                        <th>Статус</th>
                        <th>Комментарий</th>
                    </tr>

                </thead>

                {users === null ? "Загружаю" : filteredUsers.map((user) => {
                    // eslint-disable-next-line react/jsx-key
                    return (<tbody>
                        <Fragment>
                            {editUserId === user.id ? <EditTableData editFormData={editFormData} handleEdit={handleEdit} /> : <tr>
                                {/* <td onDoubleClick={_ => {

                                    setEditUserId(user.id)
                                }} className="td-id">{user.id}</td> */}
                                {/* имя */}
                                <td>{user.name}</td>
                                {/* должность */}
                                <td>/* должность */</td>
                                {/* адрес */}
                                <td>{user.address.city}</td>
                                {/* телефон */}
                                <td>{user.phone}</td>
                                {/* почта */}
                                <td>{user.email}</td>
                                {/* статус */}
                                <td className="status">/* статус */</td>
                                {/* комментарий */}
                                <td className="comment">/* комментарий */</td>
                            </tr>
                            }
                        </Fragment>

                    </tbody>)
                })}

            </table>
        </div>
    </>)
}
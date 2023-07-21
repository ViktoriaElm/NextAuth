export default function Vacancies() {
    return(<>
    <div class="main-top">
            <input class="input-search" type="text" name="" id="" placeholder="Введите запрос..." />
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Вакансия</th>
                        <th>Город</th>
                        <th>Заказчик</th>
                        <th>Кандидатов в работе</th>
                        <th>Рекрутер</th>
                        <th>Создана</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>МИБ_Frontend Angular_Горкина</td>
                        <td>Москва</td>
                        <td>МИБ</td>
                        <td>107</td>
                        <td>Горкина Виктория</td>
                        <td>15.07.2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}
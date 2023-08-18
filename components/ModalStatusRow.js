import { useState } from "react"
import { PrismaEnum } from "./Enums"

export default function ModalStatusRow() {
    const [selectedValue, setSelectedValue] = useState(PrismaEnum.Value1);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <tr className="input-status-row">
                <td className="input-status-td">
                    <select 
                    className="input-status"
                    value={selectedValue} onChange={handleChange}>
                        <option value={PrismaEnum.Value1}>{PrismaEnum.Value1}</option>
                        <option value={PrismaEnum.Value2}>{PrismaEnum.Value2}</option>
                        <option value={PrismaEnum.Value3}>{PrismaEnum.Value3}</option>
                        <option value={PrismaEnum.Value4}>{PrismaEnum.Value4}</option>
                        <option value={PrismaEnum.Value5}>{PrismaEnum.Value5}</option>
                        <option value={PrismaEnum.Value6}>{PrismaEnum.Value6}</option>
                        <option value={PrismaEnum.Value7}>{PrismaEnum.Value7}</option>
                        <option value={PrismaEnum.Value8}>{PrismaEnum.Value8}</option>
                        <option value={PrismaEnum.Value9}>{PrismaEnum.Value9}</option>
                        <option value={PrismaEnum.Value10}>{PrismaEnum.Value10}</option>
                        <option value={PrismaEnum.Value11}>{PrismaEnum.Value11}</option>
                        <option value={PrismaEnum.Value12}>{PrismaEnum.Value12}</option>
                        <option value={PrismaEnum.Value13}>{PrismaEnum.Value13}</option>
                        <option value={PrismaEnum.Value14}>{PrismaEnum.Value14}</option>
                        <option value={PrismaEnum.Value15}>{PrismaEnum.Value15}</option>
                        <option value={PrismaEnum.Value16}>{PrismaEnum.Value16}</option>
                        <option value={PrismaEnum.Value17}>{PrismaEnum.Value17}</option>
                    </select>

                    <input
                        className="input-status"
                        type="text"
                        placeholder="Взят на вакансию"
                    />

                    <input
                        className="input-status"
                        type="text"
                        placeholder="Рекрутер"
                    />

                </td>
            </tr>
        </>
    )
}
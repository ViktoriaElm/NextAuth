import { useState } from "react"
import { StatusCandidate as PrismaStatusCandidate } from "../prisma/Enums"

export default function ModalStatusRow({ handleSaveClick }) {

    const [selectedValue, setSelectedValue] = useState(PrismaStatusCandidate.new);
    const [editing, setEditing] = useState(false);

    const statuses = Object.values(PrismaStatusCandidate).map((value) => (
        <option key={value} value={value}>{value}</option>
    ));

    const handleInputClick = () => {
        setEditing(!editing);
    };

    const handleItemClick = (value) => {
        setSelectedValue(value);
        setEditing(false);
        handleSaveClick();
    };

    return (
        <>
            <div className="input-status-row">
                <div className="input-status-td">

                    <input
                        type="text"
                        value={selectedValue}
                        onClick={handleInputClick}
                        className="input-status"
                        onChange={handleItemClick}
                    />
                    {editing && (
                        <ul onClick={(e) => handleItemClick(e.target.value)}>
                            <li >{statuses}</li>
                        </ul>
                    )}
                </div>

                <div className='edit-buttons'>
                </div>

            </div>
        </>
    )
}
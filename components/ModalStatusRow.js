import { useState } from "react"
import { StatusCandidate as PrismaStatusCandidate } from "../prisma/Enums"

export default function ModalStatusRow(props) {

    const { selectedCandidate } = props;

    const [selectedValue, setSelectedValue] = useState(PrismaStatusCandidate.new);
    const [editing, setEditing] = useState(false);
    

    const statuses = Object.values(PrismaStatusCandidate).map((value) => (
        <option key={value} value={value}>{value}</option>
    ));

    const handleInputClick = () => {
        setEditing(!editing);
    };

    const handleItemClick = (e, value) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <div className="input-status-row">
                <div className="input-status-td">

                    <select
                        type="text"
                        value={selectedValue}
                        onClick={handleInputClick}
                        className="input-status"
                        onChange={handleItemClick}
                    >
                        {statuses}
                    </select>


                    <span
                        className='span-status'>
                        {selectedCandidate.comment}
                    </span>
                </div>

                <div className='edit-buttons'>
                </div>


            </div>
        </>
    )
}
import { useState } from "react"
import { StatusCandidate as PrismaStatusCandidate } from "../prisma/Enums"

export const statuses = Object.values(PrismaStatusCandidate).map((value) => (
    <option key={value} value={value}>{value}</option>
));

export default function ModalStatusRow({ selectedCandidate, username }) {

    const [selectedValue, setSelectedValue] = useState(PrismaStatusCandidate.new);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    

    return (
        <>
            <div className="input-status-row">
                <div className="input-status-td">
                    <select
                        className="input-status"
                        value={selectedValue} onChange={handleChange}>
                        {statuses}
                    </select>

                    <span className="span-status">{selectedCandidate.comment}</span>

                    {/* <span className="span-status">{username}</span> */}

                </div>
            </div>
        </>
    )
}
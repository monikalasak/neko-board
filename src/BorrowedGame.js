import React, { useState } from "react";

export default function BorrowedGame({ id, game }) {
    const [borrowed, setBorrowed] = useState(false);
    const rentColor = document.querySelector(".games-box")

    const handlerBorowed = (e) => {
        e.preventDefault();
        const borroweChange = {
            ...game,
            borrowed: true,
        };
        fetch(`http://localhost:3000/games/${id}`, {
            method: "PATCH",
            body: JSON.stringify(borroweChange),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((rest) => rest.json())
            .then((info) => {
                console.log(info);
            });

        const handlerColor = (borrowed === true) => {

        rentColor.style.backgroundColor = "red";

    }




};


return (
    <div>
        <button className="btn-rent" onClick={handlerBorowed} >Pożyczony</button>
    </div>

)

}
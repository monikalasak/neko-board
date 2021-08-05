import React, { useState } from "react";

export default function BorrowedGame({ id, game }) {
    const [borrowed, setBorrowed] = useState(false);

    const handlerBorowed = (e) => {
        e.preventDefault();
        const borroweChange = {
            ...game,
            borrowed: true,
        };
        fetch(`http://localhost:3000/games/${id}`, {
            method: "PUT",
            body: JSON.stringify(borroweChange),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((rest) => rest.json())
            .then((info) => {
                console.log(info);
            });


    };

    return (
        <div>
            <button onClick={handlerBorowed}>Pozyczony</button>
        </div>

    )

}
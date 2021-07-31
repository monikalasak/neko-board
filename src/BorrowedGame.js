import React, { useState } from "react";

export default function BorrowedGame() {
    const [borrowed, setBorrowed] = useState(false);

    const handlerBorowed = (e) => {
        e.preventDefault();
        const borroweChange = {
            borrowed: true,
        };
        fetch("http://localhost:3000/games", {
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
            <button onChange={handlerBorowed}>Pozyczony</button>
        </div>

    )

}
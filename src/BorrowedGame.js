import React, { useState } from "react";

export default function BorrowedGame({ id, game, setGames }) {
    const [borrowed, setBorrowed] = useState(false);
    const rentColor = document.querySelector(".games-box")

    const handlerBorowed = (e) => {
        e.preventDefault();
        setGames(prev => {
            const copy = [...prev];
            copy.forEach(el => {
                if (el.id === id) el.borrowed = true;
            })
            console.log(copy, prev, id)

            return copy;
        })
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




    };


    return (
        <div>
            <button className="btn-rent" onClick={handlerBorowed}>Pożyczony</button>
        </div>

    )

}
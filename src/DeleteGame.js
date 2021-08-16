import React, { useEffect, useState } from "react";

export default function DeletedGame({ id, game }) {
    const [games, setGames] = useState([]);

    const handlerDeleted = (e) => {
        e.preventDefault();
        const DeletedGame = {
            id,
            ...game
        };

        fetch(`http://localhost:3000/games/${id}`, {
            method: "DELETE",
            body: JSON.stringify(DeletedGame),
            headers: {
                "Content-Type": "application/json",
            },

        }).then(response => {
            console.log(response.ok);

        }).then(games => {
            console.log(games);
            setGames(games);
        })
            .catch(error => {
                console.log(error);
            });

    };

    return (
        <div>
            <button onClick={handlerDeleted} className="btn-rent btn-deleted"> Sprzedana</button>
        </div>
    )

}
import React, { useState, useEffect } from "react";
import BorrowedGame from "./BorrowedGame";

export default function CurrentGame() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('"http://localhost:3000/games"')
            .then(res => res.json())
            .then(games => {
                console.log(games);
                setGames(games);
            })
    }, []);

    return (

        <div>

            {games.length ? games.map(game => <div><h2>{game.title}</h2><p>{game.genre}</p><BorrowedGame /></div>) : <p>loading...</p>}
        </div>
    )

}

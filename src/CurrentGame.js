import React, { useState, useEffect } from "react";

import BorrowedGame from "./BorrowedGame";
import DeletedGame from "./DeleteGame";

export default function CurrentGame({ games }) {
    return (
        <div>

            {games.length > 0 && games.map(game => {
                return (
                    <div className={game.borrowed ? "game-box-rent" : "games-box"}>
                        <h2>{game.title}</h2>
                        <p> Typ gry:{game.genre}</p>
                        <div className="buttons">
                            <BorrowedGame id={game.id} game={game} />
                            <DeletedGame id={game.id} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

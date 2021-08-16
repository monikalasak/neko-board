import React, { useState, useEffect } from "react";

import BorrowedGame from "./BorrowedGame";
import DeletedGame from "./DeleteGame";

export default function CurrentGame({ games }) {


    return (
        <div>
            {games.length
                ? games.map(game => <div className="games-box"><h2>{game.title}</h2><p> Typ gry:{game.genre}</p><div className="buttons"><BorrowedGame id={game.id} game={game} />
                    <DeletedGame id={game.id} /></div></div>)
                : <p className="text-loading">loading...</p>}
        </div>
    )

}

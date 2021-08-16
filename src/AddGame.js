import React, { useState } from "react";



export default function AddGame({ setGames }) {


    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [borrowed, setBorrowed] = useState(false);


    const handlerTitle = (e) => {
        setTitle(e.target.value);
    }

    const handlerGenre = (e) => {
        setGenre(e.target.value);
    }


    const handlerSubmit = (e) => {
        e.preventDefault();
        const gameToSave = {
            title,
            genre,
            borrowed
        };
        fetch("http://localhost:3000/games", {
            method: "POST",
            body: JSON.stringify(gameToSave),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((rest) => rest.json())
            .then((info) => {
                console.log(info);
                setGames(prev => [...prev, gameToSave])
            });
        //const handlerReset = () => {
        //    this.setTitle({ title: '' });
        //    this.setGenre({ genre: '' });


        //}

    };


    return (
        <form className="form" onSubmit={handlerSubmit}>
            <h2>Dodaj grę</h2>
            <input type="text" value={title} onChange={handlerTitle} placeholder="Podaj tytuł" />
            <input type="text" value={genre} onChange={handlerGenre} placeholder="Padaj typ" />
            <button type="submit" >Dodaj grę</button>

        </form>
    );


}
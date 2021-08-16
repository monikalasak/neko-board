import React, { useEffect, useState } from "react";
import AddGame from "./AddGame";
import CurrentGame from "./CurrentGame";
import './scss/main.scss';
import logo from './assets/neko-board.png';
import background from './assets/pixel-heart.png';



function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then(res => res.json())
      .then(games => {
        console.log(games);
        setGames(games);
      })
  }, []);


  return (

    <div className="App">
      <div className="logo-main">
        <div className="logo-web">
          <img src={logo} alt="neko-board"></img>
          <h1 className="logo-text">NEKO-BOARD</h1>
        </div>
        <div className="logo-user">
          <i className="far fa-user-circle"></i>
          <p>Użytkownik</p>
        </div>
      </div>
      <div style={{
        backgroundImage: 'url(${background})',
        witdh: '100%',
        height: '100%'
      }}>
        <AddGame setGames={setGames} />
        <CurrentGame games={games} />
      </div>
      <div className="footter">
        <div>
          <p>Autor strony: Monika Łasak <br></br>Autor logo:Marcin Mitek</p>
        </div>
        <div className="fotter-contacts">
          <a href="https://github.com/monikalasak?tab=repositories" target="_blank">
            <i class="fab fa-github-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/monika-łasak/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App;

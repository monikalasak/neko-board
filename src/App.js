import React from "react";
import AddGame from "./AddGame";
import CurrentGame from "./CurrentGame";
import './scss/main.scss'

function App() {

  return (

    <div className="App">
      <div className="logo-main">
        <div className="logo-web">
          <img src="./public/neko-board.png" alt="neko-board"></img>
          <h1 className="logo-text">NEKO-BOARD</h1>
        </div>
        <div className="logo-user">
          <i className="far fa-user-circle"></i>
          <p>Użytkownik</p>
        </div>
      </div>
      <div className="cointener">
        <AddGame />
        <CurrentGame />
      </div>
      <div className="footter">
        <div>
          <p>Autor: Monika Łasak</p>
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
  );
}

export default App;

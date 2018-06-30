import React from "react";

const MainPage = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a className="navbar-brand" href="#">
      Heroes Clicky-Game
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
            Click an image to begin! <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
            Score: <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Top Score: <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        </div>
    </nav>
   

    <div className="jumbotron">
      <h1>Heroes Clicky Game!</h1>
      <p>
      Click on an image to earn points, but don't click on any more than once!
      </p>
    </div>
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Non eu sit duis adipisicing esse incididunt ad proident.</h3>
      </div>
     <footer>
       
       </footer>
    </div>
  </div>
);

export default MainPage;

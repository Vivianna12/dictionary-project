import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid " alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/Vivianna12" target="blank">
              Vivianna Samite Estevez
            </a>{" "}
            is open sourced on{" "}
            <a
              href="https://github.com/Vivianna12/dictionary-project"
              target="blank"
            >
              {" "}
              Github
            </a>{" "}
            and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}

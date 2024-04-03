import logo from "./logo.png"
import Dictionary from "./Dictionary";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <Dictionary />
        </header>
      </div>
      <footer>
        This project was coded by Monika Gosa and is open-sourced on
        <a
          href="https://github.com/MGosa/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

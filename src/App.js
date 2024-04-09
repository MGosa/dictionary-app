
import Dictionary from "./Dictionary";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>English Dictionary</h1>

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

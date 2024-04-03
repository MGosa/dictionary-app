import Results from "./Results";
import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult]=useState(null);

  function handleRespone(response) {
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();
    

    let apiKey = "off12bea02cd1ft1f4f0c632ee3ca6b4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespone);
  }

  function handleWordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
      </form>
      <Results result={result} />
    </div>
  );
}

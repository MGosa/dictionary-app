import Results from "./Results";
import { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import "./Dictionary.css";

 export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult]=useState(null);
  let[photos, setPhotos]= useState(null);

  function handleRespone(response) {
    setResult(response.data);
  }

  function handleSheCodesResponse(response){
    
    setPhotos(response.data.photos);
  }


  function search(event) {
    event.preventDefault();
    

    let apiKey = "off12bea02cd1ft1f4f0c632ee3ca6b4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespone);

    let SheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(SheCodesApiUrl).then(handleSheCodesResponse);
  }

  function handleWordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" placeholder="🔍 Search a word" onChange={handleWordChange} />
        </form>
      </section>
      <Results result={result} />
      <Photos photos={photos} />
    </div>
  );
}

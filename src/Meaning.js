import Synonyms from "./Synonyms";


 export default function Meaning(props){
   
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        
          <strong>Definition: </strong> {props.meaning.definition}
          <br />
          <em><strong>Example: </strong>{props.meaning.example}</em>
          <Synonyms synonyms={props.meaning.synonyms} />
        
      </div>
    );
}
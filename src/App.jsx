import { useState } from "react";
import { URL } from "./constants";

function App() {
    const[question, setQuestion] = useState('');
    const[result, setResult] = useState(undefined);

    const payload = {
      "contents": [{
        "parts": [{
            "text": question
          }]
      }]
    }

    const askQuestion = async() =>{
      let response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });

      response = await response.json();
      // console.log(response.candidates[0].content.parts[0].text);
      setResult(response.candidates[0].content.parts[0].text)

      setQuestion("");
    }

  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 bg-zinc-800">
           
        </div>

        <div className="col-span-4 p-10">
            <div className="container h-110 ">
              <div className="text-white">{result}</div>
            </div>
            <div className="bg-zinc-800 w-1/2 text-white m-auto rounded-4xl border border-zinc-700 flex p-1 h-16 pr-5">
              <input type="text" value={question} onChange={(e)=> setQuestion(e.target.value)} placeholder="Hyy!! Ask me anything" className="w-full h-full p-3 outline-none"/>
              <button onClick={askQuestion}>Ask</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

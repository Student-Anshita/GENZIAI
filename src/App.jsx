import { useState } from "react";
import { URL } from "./constants";
import Answers from "./components/Answers";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);

  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };

  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("*");
    dataString = dataString.map((item) => item.trim());

    // console.log("hi", dataString);
    setResult(dataString);

    setQuestion("");
  };

  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 bg-zinc-800"></div>

        <div className="col-span-4 p-10">
          <div className="container h-180 overflow-scroll [scrollbar-width:none] 
  [-ms-overflow-style:none] 
  [&::-webkit-scrollbar]:hidden  ">
            <div className="text-zinc-300">
              {/* <ul>
                {result &&
                  result.map((item, index) => (
                    <li className="text-left p-1">
                      <Answers ans={item} key={index} />
                    </li>
                  ))}
              </ul> */}

              <ul>
  {result &&
    result
      .filter(item => item.trim() !== '') // remove empty strings
      .map((item, index) => (
        <li className="text-left p-1" index={index}>
          <Answers ans={item} index={index} totalResult={result.length}/>
        </li>
      ))}
</ul>

            </div>
          </div>
          <div className="bg-zinc-800 w-1/2 text-white m-auto rounded-4xl border border-zinc-700 flex p-1 h-16 pr-5">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Hyy!! Ask me anything"
              className="w-full h-full p-3 outline-none"
            />
            <button onClick={askQuestion}>Ask</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

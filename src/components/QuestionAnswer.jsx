import React from "react";
import Answers from "./Answers";

const QuestionAnswer = ({item, index}) => {
  return (
    <>
      <div
        key={index + Math.random()}
        className={
          item.type == "q"
            ? "flex justify-end"
            : "p-5 bg-[#130731] rounded-tl-4xl rounded-tr-3xl rounded-br-3xl w-fit"
        }
      >
        {item.type == "q" ? (
          <li
            className="text-right p-3 dark:bg-zinc-900 border-2 dark:border-purple-400/40
  shadow-[0_8px_30px_rgba(67,34,119,0.6)] bg-red-100 border-red-100 text-zinc-800 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit mb-5"
            key={index + Math.random()}
          >
            <Answers
              ans={item.text}
              index={index}
              totalResult={1}
              type={item.type}
            />
          </li>
        ) : (
          item.text
            .filter((ansItem) => String(ansItem).trim() !== "")
            .map((ansItem, ansIndex) => (
              <li className="text-left p-1  " key={ansIndex + Math.random()}>
                <Answers
                  ans={ansItem}
                  index={ansIndex}
                  totalResult={item.length}
                  type={item.type}
                />
              </li>
            ))
        )}
      </div>
    </>
  );
};

export default QuestionAnswer;

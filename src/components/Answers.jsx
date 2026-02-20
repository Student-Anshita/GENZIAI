import React, { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../Helper";
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Answers = ({ ans, index, totalResult, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, []);

  const renderer = {
    code({node, inline, children, className, ...props}){
      const match = /language-(\w+)/.exec(className ||  '');
      return !inline && match?(
        <SyntaxHighlighter
        {...props}
        children = {String(children).replace(/\n$/, '')}
        language={match[1]}
        style={dark}
        PreTag="div"
        />
      ):(
          <code {...props} className={className}>
            {children}
          </code>
      )
    }
  }

  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className={"py-2 text-xl block text-white"}>{answer}</span>
      ) : heading ? (
        <span
          className={"py-2 text-lg block text-white"}
        >
          {answer}
        </span>
      ) : (
        <span className={type=='q'? 'pl-1': 'pl justify-items-start-10 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl'}>
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
          </span>
      )}
    </>
  );
};

export default Answers;

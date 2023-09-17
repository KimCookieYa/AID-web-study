import { useRef, useState } from "react";
import React from "react";

export default function WordRelay() {
  const [word, setWord] = useState("김밥");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>단어: {word}</div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input ref={inputRef} value={value} onChange={handleChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

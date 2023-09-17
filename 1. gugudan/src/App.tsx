import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  });

  const handleChange = (e) => {
    setState({ ...state, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(state.value) === state.first * state.second) {
      setState({
        ...state,
        result: state.value + "는 정답입니다.",
        value: "",
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
      });
    } else {
      setState({
        ...state,
        result: state.value + "는 틀렸습니다.",
        value: "",
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
      });
    }
  };

  return (
    <>
      <div>
        {state.first} 곱하기 {state.second} = ?
      </div>
      <form>
        <input type="text" value={state.value} onChange={handleChange} />
        <button onClick={handleSubmit}>입력!</button>
      </form>
      <div>{state.result}</div>
    </>
  );
}

export default App;

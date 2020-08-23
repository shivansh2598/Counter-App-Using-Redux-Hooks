import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const counterLst = useSelector((state) => state.counterLst);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="App-header">
        <h1>Counter : {counter}</h1>
        <div className="App-content">
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            Increment
          </button>
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
          >
            Decrement
          </button>
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "ADD" });
            }}
          >
            Add Element
          </button>
        </div>
        <ul>
          {counterLst.map((elems) => {
            return <li key={elems.key} onClick = {()=>{dispatch({type : 'DELETE', value : elems.key})}}>{elems.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;

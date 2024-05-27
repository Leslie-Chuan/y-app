import React, { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    let newArr = arr;
    newArr.push((arr[arr.length - 1] || 0) + 1);
    console.log("newArr", newArr, "arr:", arr);
    setArr(newArr);
  };

  const handleAdd = () => {
    setCount(count + 1);
    setTimeout(() => {
      setCount(count + 2);
    }, 2000)
  };
  return (
    <div className="App">
      {arr.map((item) => (
        <div>{`顺序${item}`}</div>
      ))}
      <div onClick={incrementHandle}>点我</div>
      <div>{`当前值${count}`}</div>
      <div onClick={handleAdd}>加我</div>
    </div>
  );
}

export default App;

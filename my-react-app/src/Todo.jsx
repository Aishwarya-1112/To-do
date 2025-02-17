import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]); // Initialize list as an empty array
  const [data, setData] = useState("");

  const addList = () => {
    setList((prevList) => [...prevList, data]);
    setData("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button onClick={addList}>Add</button>
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
};

export default Todo;

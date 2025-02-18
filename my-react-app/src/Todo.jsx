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
          className="border -2 border-orange-800"
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button
          className="border -2 border-orange-800 , p-5 , m-8"
          onClick={addList}
        >
          Add
        </button>
        {list.map((item, index) => (
          <ul>
            <li key={index}>{item}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Todo;

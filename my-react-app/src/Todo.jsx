import { useRef, useState } from "react";

const Todo = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState("");

  const listItems = useRef();

  const addListItems = () => {
    if (!list) {
      alert("Enter the value");
    }
    {
      setData([...data, list]);
      setList("");
    }
    const remove = (index) => {
      const deleteData = data.filter(
        (listItems, indexItem) => indexItem !== index
      );
    };
  };

  return (
    <>
      <div>
        <form>
          <input
            ref={listItems}
            type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <button onClick={addListItems}>Add</button>
        </form>

        <ul>
          {data.map((curreItem, index) => {
            return <li>{curreItem}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default Todo;

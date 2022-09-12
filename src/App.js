import React, { useState, useRef, useEffect, useContext } from "react";
import TodoItem from "./components/TodoItem";
import Panel from "./components/Panel";
import PanelHeadline from "./components/PanelHeadline";
import AddTask from "./components/AddTask";
import AddCategory from "./components/AddCategory";
import { Context } from "../src/context";

const initialState = [
  {
    id: 1,
    title: "Est eu imperdiet tristique viverra neque diam penatibus.",
    category: "Productivity",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Tempor vitae turpis interdum morbi nam.",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Tristique dapibus neque, lectus venenatis sed congue.",
    category: "Productivity",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Buy food",
    category: "Productivity",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Arcu, dui, mi proin in feugiat nibh",
    category: "Productivity",
    isCompleted: false,
  },
  {
    id: 6,
    title: "Nunc iaculis mollis ultrices magna id",
    category: "Productivity",
    isCompleted: false,
  },
  {
    id: 7,
    title: "Lectus dignissim egestas quisque nulla.",
    category: "Productivity",
    isCompleted: false,
  },
  {
    id: 8,
    title: "Purus elit, facilisi sit semper massa",
    category: "Productivity",
    isCompleted: false,
  },
  {
    id: 9,
    title: "design a banner",
    category: "Productivity",
    isCompleted: false,
  },
];

const defaultCategories = {
  Inbox: false,
  Productivity: false,
  Work: false,
};

function App() {
  const [todos, setTodos] = useState(initialState);
  const [inputValue, setInputValue] = useState("Write a task...");
  const [categories, setCategories] = useState(defaultCategories);

  /*  useEffect(() => {
    console.log("sfasfasfsaf");
    const stringData = localStorage.getItem("todos");
    const strData = localStorage.getItem("categories");
    const parseData = JSON.parse(stringData);
    const parseStrData = JSON.parse(strData);
    setTodos(parseData);
    setCategories(parseStrData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [todos, categories]); */

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((a) => a.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const handleChangeInput = ({ target: { value: text } }) => {
    setInputValue(text);
  };

  const handleAddTask = () => {
    const lastId = todos.map((todo) => todo.id).sort((a, b) => b - a)[0];
    setTodos((prevState) => [
      ...prevState,
      {
        id: lastId + 1,
        title: inputNameRef.current.value,
        isCompleted: false,
        category: "Inbox",
      },
    ]);
    setInputValue("");
  };

  const inputNameRef = useRef();

  const inputCategoriesRef = useRef();

  const getTasksByCategories = (name) => {
    return todos.filter((todo) => todo.category === name);
  };

  const toggleList = (name) => {
    setCategories((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const deleteTask = (event) => {
    event.stopPropagation();
    const id = Number(event.target.id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleAddCategory = () => {
    setCategories((prevState) => ({
      ...prevState,
      [inputCategoriesRef.current.value]: false,
    }));
  };

  const countTasks = (name) => {
    /* return todos.filter(
      (item) => item.isCompleted === false && item.category === name
    ).length; */

    return todos.reduce((acc, item) => {
      return Number(item.isCompleted === false && item.category === name) + acc;
    }, 0);
  };

  const countUnresolvedTasks = (name) => {
    return todos.filter(
      (item) => item.isCompleted === true && item.category === name
    ).length;
  };

  return (
    <Context.Provider value={{deleteTask,toggleList }}>
      <Panel>
        {Object.keys(categories).map((name) => (
          <>
            <PanelHeadline
              name={name}
              onClick={() => toggleList(name)}
              categories={categories}
              countTasks={countTasks(name)}
              countUnresolvedTasks={countUnresolvedTasks(name)}
            />
            {categories[name] &&
              getTasksByCategories(name).map((todo) => (
                <TodoItem
                  key={todo.id}
                  changeTodo={changeTodo}
                  todo={todo}
                  deleteTask={deleteTask}
                />
              ))}
          </>
        ))}

        {/* <input
        type="text"
        name="addTask"
        value={inputValue}
        onChange={(event) => handleChangeInput(event)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
        className='task'
      /> */}
        {/* <input
        type="text"
        name="addTask"
        ref={inputNameRef}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
      /> */}
        <AddTask handleAddTask={handleAddTask} inputNameRef={inputNameRef} />
        <AddCategory
          inputCategoriesRef={inputCategoriesRef}
          handleAddCategory={handleAddCategory}
        />
      </Panel>
    </Context.Provider>
  );
}

export default App;

import React, { useTransition } from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !useTransition.completed
                };
            }
            return item;
        })
        );
    };
    
    // change color depending on what the task is
    const changeColor = (text) => {
        var newBg = "todo";
        if (text.indexOf("lecture") !== -1 || text.indexOf("notes") !== -1 || text.indexOf("homework") !== -1 || text.indexOf("study") !== -1) {
            newBg = "todoSchool";
        } else if (text.indexOf("gym") !== -1) {
            newBg = "todoGym";
        }
        return newBg;
    };
    
    
    return (
        <div className={changeColor(newBg)}> // originally <div className="todo"> before deciding on color changing thing
            <li className = {`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={completeHandler} className = "complete-btn">
                   <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
         </div>
    );
};

export default Todo;

import { useEffect, useState } from "react";
import "./Todo.css";
import AllTask from "./AllTask";
import PendingTask from "./PendingTask";
import OverDueTask from "./OverDueTask";
import CompletedTask from "./CompletedTask"
const Todo = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({
        title: "",
        date: "",
        description: "",
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        const alltodosfromstorage = localStorage.getItem("todos");
        if (alltodosfromstorage) {
            setTodos(JSON.parse(alltodosfromstorage))
        }
    }, [])

    const handleTabChange = (index) => {
        setActiveTab(index);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTodo(prev => (
            {
                ...prev,
                [name]: value,
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos(prev => {
            
        });
        setNewTodo({})
    }

    const allTabs = [
        {
            tabName: "AllTask",
            componentName: AllTask,
        },
        {
            tabName: "PendingTask",
            componentName: PendingTask,
        },
        {
            tabName: "OverDueTask",
            componentName: OverDueTask,
        },
        {
            tabName: "CompletedTask",
            componentName: CompletedTask,
        },
    ]

    const TaskTab = allTabs[activeTab].componentName;

    return (
        <div className="container">
            <div className="container_header">To-Do List</div>
            <form action="" className="container_form">
                <label htmlFor="title">Task Title </label>
                <input type="text" name="title" id="title" value={newTodo.title} onChange={handleChange} />

                <label htmlFor="date">Due Date</label>
                <input type="date" name="date" id="date" value={newTodo.date} onChange={handleChange} />

                <label htmlFor="description">Task Description</label>
                <textarea name="description" id="description" value={newTodo.description} onChange={handleChange} placeholder="Type here..." ></textarea>
                <button onClick={handleSubmit}>Add</button>
            </form>
            <div className="container_navBar">
                {
                    allTabs.map((tab, index) => {
                        return (
                            <div key={index} onClick={() => handleTabChange(index)}>
                                {tab.tabName}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <TaskTab todos={todos} setTodos={setTodos} />
            </div>
        </div>
    )
}

export default Todo;
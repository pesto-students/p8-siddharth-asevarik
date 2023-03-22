import { useSelector } from "react-redux";
import "../assets/Styles/TasksBoard.scss"
import TaskCard from "./TaskCard";
export const TasksBoard = ()=>{
    const selector = useSelector(state=>state.changeTodoActionReducer)
    console.log(selector);
    return (
        <div className="taskBoard">
           {selector.map((task)=>{
            console.log(task);
            return <TaskCard task={task} key={task.id}/>
           })}
        </div>
    );
}
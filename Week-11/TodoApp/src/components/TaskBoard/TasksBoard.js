import { useSelector } from "react-redux";
import "./TasksBoard.scss";
import TaskCard from "../TaskCard";
const TasksBoard = ()=>{
    const selector = useSelector(state=>state.changeTodoActionReducer)
    return (
        <div className="taskBoard">
           {selector.map((task)=>{
            console.log(task);
            return <TaskCard task={task} key={task.id}/>
           })}
        </div>
    );
}
export default TasksBoard;
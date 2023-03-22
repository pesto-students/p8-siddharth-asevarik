import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/Styles/TaskCard.scss"
import { IconButton } from "../Utils/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import { completedTodo, deleteTodo, updateTodo } from "../reducers/actions/todoActions";
import * as moment from 'moment';
const TaskCard = ({ task }) => {
    const selector = useSelector(state => state.changeTodoActionReducer)
    const [openDorpDown, setOpenDropDown] = useState({isOpen:false,anchorEl:null});
    const [isTodoEditable,setisTodoEditable] = useState(false);
    const dispatch = useDispatch();
    const textarearef = useRef(null);
    function openDropDownMenu(event) {
        setOpenDropDown({isOpen:true,anchorEl:event.currentTarget});
    }
    function closeDropDownMenu() {
        setOpenDropDown({isOpen:false,anchorEl:null});
    }
    function handleMarkAsCompleted(){
        dispatch(completedTodo(task.id));
        closeDropDownMenu()
    }
    function handleDeleteTodo() {
        dispatch(deleteTodo(task.id));
        closeDropDownMenu();
    }
    function handleEditTodo(){
        setisTodoEditable(true);
        closeDropDownMenu()
        console.log("edit functionality")
    }
    function onfinishedEditing(){
        if(isTodoEditable){
            //TODO: save task to DB
            console.log("current task", task);
            dispatch(updateTodo({
                ...task,
                description:textarearef.current.value,
            }));
            setisTodoEditable(false)
            console.log("unfocused value"+textarearef.current.value);
        }
    }
    return (
        
        <div className={"task-card " + task.taskbgColor}>
            <textarea ref = {textarearef}readOnly={!isTodoEditable} onBlur={onfinishedEditing} className={task.completed && "completed"}>{task.description}
            </textarea>
            <IconButton className={"fav-btn"} icon={faStar} onButtonClick={() => {
                console.log(selector);
                console.log("favorite button pressed")
            }} />
            <footer> {moment(task.id).format('MMMM d, YYYY')}
                <IconButton icon={faPen} onButtonClick={openDropDownMenu} />
                <Menu
                    id="basic-menu"
                    anchorEl={openDorpDown.anchorEl}
                    open={openDorpDown.isOpen}
                    onClose={closeDropDownMenu}
                >
                    <MenuItem onClick={handleEditTodo} disabled={task.completed}>Edit</MenuItem>
                    <MenuItem onClick={handleDeleteTodo}>Delete</MenuItem>
                    <MenuItem onClick={handleMarkAsCompleted}>{task.completed?"mark as incomplete":"mark as completed"}</MenuItem>
                </Menu>
            </footer>
        </div>
    )
}
export default TaskCard;

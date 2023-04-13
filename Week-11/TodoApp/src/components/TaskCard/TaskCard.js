import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TaskCard.scss"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { completedTodo, deleteTodo, updateTodo } from "../../reducers/actions/todoActions";
import * as moment from 'moment';
import { IconButton } from "../common";
import PropTypes from "prop-types";
const TaskCard = ({ task }) => {
    const selector = useSelector(state => state.changeTodoActionReducer)
    const [openDorpDown, setOpenDropDown] = useState({isOpen:false,anchorEl:null});
    const [isTodoEditable,setisTodoEditable] = useState(false);
    const dispatch = useDispatch();
    const textarearef = useRef(null);
    function handleopenDropDownMenu(event) {
        setOpenDropDown({isOpen:true,anchorEl:event.currentTarget});
    }
    function handlecloseDropDownMenu() {
        setOpenDropDown({isOpen:false,anchorEl:null});
    }
    function handleMarkAsCompleted(){
        dispatch(completedTodo(task.id));
        handlecloseDropDownMenu()
    }
    function handleDeleteTodo() {
        dispatch(deleteTodo(task.id));
        handlecloseDropDownMenu();
    }
    function handleEditTodo(){
        setisTodoEditable(true);
        handlecloseDropDownMenu()
        console.log("edit functionality")
    }
    function handleOnFinishedEditing(){
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
            <textarea ref = {textarearef} readOnly={!isTodoEditable} onBlur={handleOnFinishedEditing} className={task.completed && "completed"}>{task.description}
            </textarea>
            <IconButton className={"fav-btn"} icon={faStar} onButtonClick={() => {
                console.log(selector);
                console.log("favorite button pressed")
            }} />
            <footer> {moment(task.id).format('MMMM d, YYYY')}
                <IconButton icon={faPen} onButtonClick={handleopenDropDownMenu} />
                <Menu
                    id="basic-menu"
                    anchorEl={openDorpDown.anchorEl}
                    open={openDorpDown.isOpen}
                    onClose={handlecloseDropDownMenu}
                >
                    <MenuItem onClick={handleEditTodo} disabled={task.completed}>Edit</MenuItem>
                    <MenuItem onClick={handleDeleteTodo}>Delete</MenuItem>
                    <MenuItem onClick={handleMarkAsCompleted}>{task.completed?"mark as incomplete":"mark as completed"}</MenuItem>
                </Menu>
            </footer>
        </div>
    )
}
TaskCard.propsTypes={
    task:PropTypes.shape({
        id:PropTypes.any,
        description:PropTypes.string,
        completed:PropTypes.bool,
        taskbgColor:PropTypes.string,
    })
}
export default TaskCard;

import TaskCard from "./components/TaskCard";
import './assets/Styles/App.scss'
import { Sidebar } from "./components/SideBar/Sidebar";
import { Header } from "./components/Header";
import { TasksBoard } from "./components/TasksBoard";
import { useState } from "react";
import { colors } from "./Utils/constants";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./reducers/actions/todoActions";
function App() {
  const[ismodalOpen,setisModalOpen] = useState({status:false,color:"sky_blue"})
  const selector = useSelector(state=>state.changeTodoActionReducer);
  const dispatch = useDispatch();  
  
  function handleModalOpen(id) {
      setisModalOpen({status:!ismodalOpen.status,color:colors[id]})
      }
    function modalHandleOnDiscard(){
      setisModalOpen({status:!ismodalOpen.status,color:""});
    }
    function modalHandleOnSave(taskDescription){
      console.log("save button "+taskDescription);
      dispatch(addTodo({
        id:Date.now(),
        description:taskDescription,
        completed:false,
        taskbgColor:ismodalOpen.color,
      }))
      modalHandleOnDiscard()
    }
  return (
    <div className="container">
      <Sidebar handleDotClick={handleModalOpen}/>
      {ismodalOpen.status && <Modal bgColor={ismodalOpen.color} onDiscard={modalHandleOnDiscard} onSave={modalHandleOnSave}/>}
      <div className="todoContainer">
        <Header onSearchClick={()=>console.log("search button tapped")}/>
        <h1>NOTES</h1>
        <TasksBoard/>
      </div>
    </div>
  );
}

export default App;

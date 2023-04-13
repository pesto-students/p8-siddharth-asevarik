import './App.scss'
import { Sidebar,Header,TasksBoard,Modal } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../Utils/constants";
import { useState } from "react";
import { addTodo } from "../../reducers/actions/todoActions";
const Home = () => {
  const dispatch = useDispatch();  
  const[ismodalOpen,setisModalOpen] = useState({status:false,color:"sky_blue"})
  const selector = useSelector(state=>state.changeTodoActionReducer);
  
  function handleModalOpen(id) {
      setisModalOpen({status:!ismodalOpen.status,color:colors[id]})
      }
    function handleModalOnDiscard(){
      setisModalOpen({status:!ismodalOpen.status,color:""});
    }
    function handleModalOnSave(taskDescription){
      console.log("save button "+taskDescription);
      dispatch(addTodo({
        id:Date.now(),
        description:taskDescription,
        completed:false,
        taskbgColor:ismodalOpen.color,
      }))
      handleModalOnDiscard()
    }
    console.log("haskafsdj;afldafkj")
  return (
    <div className="container">
      <Sidebar handleDotClick={handleModalOpen}/>
      {ismodalOpen.status && <Modal bgColor={ismodalOpen.color} onDiscard={handleModalOnDiscard} onSave={handleModalOnSave}/>}
      <div className="todoContainer">
        <Header onSearchClick={()=>console.log("search button tapped")}/>
        <h1>NOTES</h1>
        <TasksBoard/>
      </div>
    </div>
  );
}

export default Home;
  
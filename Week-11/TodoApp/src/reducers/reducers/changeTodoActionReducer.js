import { colors } from "../../Utils/constants";
import { todoActions } from "../actions/todoActions";

const intialState = [
    {
        id:Date.now(),
        description:"go to Shopping",
        completed:false,
        taskbgColor:colors[0],
    },
    {
        id:Date.now()+1,
        description:"take the dog out",
        completed:false,
        taskbgColor:colors[1],
    },
    {
        id:Date.now()+2,
        description:"make sandwiches",
        completed:false,
        taskbgColor:colors[2],
    },
    {
        id:Date.now()+3,
        description:"learn react library",
        completed:false,
        taskbgColor:colors[3],
    },
    {
        id:Date.now()+4,
        description:"take the shirt for dry cleaning",
        completed:false,
        taskbgColor:colors[4],
    },
    {
        id:Date.now()+5,
        description:"buy diet materials",
        completed:false,
        taskbgColor:colors[5],
    },

]

const changeTodoActionReducer = (state=intialState,action)=>{
    switch (action.type) {
        case todoActions.Add:
            return [...state ,action.value];
        case todoActions.Delete:
           const filteredTodos = state.filter((todo)=>todo.id!==action.value);
           return filteredTodos
        case todoActions.Update:
            const updatedTodos = state.map(todo=>{
                if(todo.id === action.value.id){
                    return {...todo,description:action.value.description}
                }
                return todo;
            })
            return updatedTodos;
        case todoActions.Complete:
            const completedTodos = state.map(todo=>{
                if(todo.id === action.value){
                    return {...todo,completed:!todo.completed}
                }
                return todo
            })
            return completedTodos;
        default:
            return state;
    }
}
export default changeTodoActionReducer;

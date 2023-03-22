export const todoActions = {
    Add:"ADD_TODO",
    Delete:"DELETE_TODO",
    Update:"UPDATE_TODO",
    Complete:"COMPLETED",
}

export const addTodo = (taskObj)=>({type:todoActions.Add,value:taskObj})
export const deleteTodo = (taskId)=>({type:todoActions.Delete,value:taskId})
export const updateTodo = (task)=>({type:todoActions.Update,value:task})
export const completedTodo = (taskId)=>({type:todoActions.Complete,value:taskId})
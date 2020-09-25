export const addNewTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

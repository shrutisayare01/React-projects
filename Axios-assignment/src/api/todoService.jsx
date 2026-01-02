import axiosInstance from "./axiosInstance";

//fetch all todos

export const getTodos=()=>{
    return axiosInstance.get("/todos")
}

//fetch single todo by Id

export const getTodoById=(id)=>{
    return axiosInstance.get(`/todos/${id}`)
}

import {createSlice , createAsyncThunk } from "@reduxjs/toolkit"


export const getPosts = createAsyncThunk("Fetchtodo" , async ()=>{
  return fetch('https://jsonplaceholder.typicode.com/todos')
 .then((res)=>res.json())
})
const postSlice = createSlice({
name:"posts",
initialState:{
  posts:[],
  isLoading:false,
  
},
extraReducers : {
[getPosts.pending]:(state , action)=>{
  state.isLoading = true
},
[getPosts.fulfilled]:(state , action)=>{
  state.isLoading = false
  state.posts= action.payload;
},
[getPosts.rejected]:(state , action)=>{
  state.isLoading = true
},


},


})

export default postSlice.reducer
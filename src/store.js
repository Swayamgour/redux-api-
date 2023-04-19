import {configureStore} from "@reduxjs/toolkit"
import PostReduser from './postSlice'

export default configureStore({
  reducer:{
   post : PostReduser,

  },
})

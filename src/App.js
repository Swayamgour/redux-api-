import React, { useEffect } from 'react';
// import {"./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './postSlice.js';

export default function App() {
  const dispatch = useDispatch();
  const { posts , isLoading  } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  },[]);

  return (
    <div>
     
      {
        posts.map((x , i)=>(
          <td>
            <tr>{x.id}</tr>
            <tr>{x.title}</tr>
            <tr>{x.completed}</tr>
            </td>
        ))
      }
      
    </div>
  );
}

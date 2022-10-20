import React, {Fragment, useEffect} from 'react';
import {useQuery} from "react-query";

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
}

const Home = () =>{
  const { isLoading, isError, data, error } = useQuery('post', fetchPost);
  if(isLoading){
    return null;
  }
  return (
    <Fragment>
      <div>Home</div>
      <ul>
        <li>{ data.title }</li>
        <li>userId: { data.userId }</li>
      </ul>
    </Fragment>
  )
}
export default Home;

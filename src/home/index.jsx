import React, {Fragment, useEffect} from 'react';

const Home = () =>{
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    console.log('home')
  },[])
  return (
    <Fragment>
      <div>Home</div>
    </Fragment>
  )
}
export default Home;

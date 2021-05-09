import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Posts from './components/Posts';
import Details from './components/Details';
import axios from 'axios';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [details, setDetails] = useState([]);
  
  

  useEffect(() => {
    const fetchPosts = async () => {
      
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      
    };

    fetchPosts();
  }, []);

  const currentPosts = posts.slice(0, 10);

  return (
    <Router>
      <Switch>
        <div className='container mt-5'>
          <h1 className='text-primary mb-3'>JSON</h1>
          <Posts posts={currentPosts}  />

        </div>


      </Switch>
      <Switch>
        <Route exact path="/details" component={Details} />


      </Switch>
    </Router>
  );
};

export default App;
  
import React from 'react';
import { useHistory } from 'react-router';


const Posts = ({ posts }) => {
    
const history=useHistory();

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.id + " " + post.title }
          <button className="btn" onClick={() => {
              history.push("/details");
          }

          }>details</button>
          
        </li>

        
      ))}
    </ul>
  );
};

export default Posts;
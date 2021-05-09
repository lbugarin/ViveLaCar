  
import React from 'react';



const Details = ({details}) => {



  return (
    <ul className='list-group mb-4'>
      {details(post => (
        <li key={details.id} className='list-group-item'>
          {details.id + " " + details.title }

        </li>

        
      ))}
    </ul>
  );
};

export default Details;

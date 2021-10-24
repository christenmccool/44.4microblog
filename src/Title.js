import React from 'react';
import {Link} from 'react-router-dom';
import './Title.css';

const Title = ({id, title, description}) => {
  return (
    <div className="Title">
      <Link exact to={`/posts/${id}`}><h1>{title}</h1></Link>
      <p>{description}</p>
    </div>
  )
}

export default Title;
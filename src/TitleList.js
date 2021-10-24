import React, {useContext} from 'react';
import Title from './Title.js';
import PostContext from './PostContext';


import './TitleList.css';


const TitleList = () => {
  const posts = useContext(PostContext);
  
  return (
    <div className="TitleList">
      {posts.map(post => 
        <Title 
          key={post.id} 
          id={post.id} 
          title={post.title} 
          description={post.description} 
        />
      )}
    </div>
  )
}

export default TitleList;
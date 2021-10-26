import React, {useContext} from 'react';
import Title from './Title.js';
import {useSelector} from 'react-redux';
import './TitleList.css';


const TitleList = () => {
  const posts = useSelector(state => state.posts);
  
  return (
    <div className="TitleList">
      {Object.keys(posts).map(key => 
        <Title 
          key={key} 
          id={key} 
          title={posts[key].title} 
          description={posts[key].description} 
        />
      )}
    </div>
  )
}

export default TitleList;
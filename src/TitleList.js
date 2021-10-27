import React, {useEffect} from 'react';
import Title from './Title.js';
import {useSelector, useDispatch} from 'react-redux';
import {getTitlesFromAPI} from './actions';
import './TitleList.css';


const TitleList = () => {
  const titles = useSelector(state => state.titles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTitlesFromAPI());
  }, [dispatch]);
  
  return (
    <div className="TitleList">
       {titles.map(title => 
        <Title 
          key={title.id} 
          id={title.id} 
          title={title.title} 
          description={title.description} 
        />
      )}
    </div>
  )
}

export default TitleList;
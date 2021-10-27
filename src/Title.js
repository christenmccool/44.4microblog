import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {postVoteToAPI} from './actions';
import './Title.css';


const Title = ({id, title, description, votes}) => {
  const dispatch = useDispatch();

  const clickThumbsUp = () => {
    dispatch(postVoteToAPI(id, 'up'));
  }

  const clickThumbsDown = () => {
    dispatch(postVoteToAPI(id, 'down'));
  }

  return (
    <div className="Title">
      <Link to={`/posts/${id}`}><h1>{title}</h1></Link>
      <p>{description}</p>
      <div className="Title-vote-div">
        <span>{votes} Votes</span>      
        <FontAwesomeIcon className="Title-thumbsup" icon={faThumbsUp} onClick={clickThumbsUp} />
        <FontAwesomeIcon className="Title-thumbsdown" icon={faThumbsDown} onClick={clickThumbsDown} />
      </div>
    </div>
  )
}

export default Title;
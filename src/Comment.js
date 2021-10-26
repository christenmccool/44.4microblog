import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Comment.css';

const Comment = ({comment, removeComment}) => {

  const handleClick = () => {
    removeComment();
  }

  return (
    <div className="Comment">
      <FontAwesomeIcon className="Comment-icon" icon={faTrashAlt} onClick={handleClick} />
      <div>{comment}</div>
    </div>
  )
}

export default Comment;
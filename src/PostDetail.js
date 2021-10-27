import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrashAlt, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import CommentList from './CommentList';
import './PostDetail.css';


const PostDetail = ({id, post, removePost, toggleShowForm, voteOnPost}) => {

  const handleTrashClick = () => {
    removePost(post.id);
  }

  const clickThumbsUp = () => {
    voteOnPost('up');
  }

  const clickThumbsDown = () => {
    voteOnPost('down');
  }

  return (
    <div className="PostDetail">
      <div className="PostDetail-heading">
        <h1>{post.title}</h1>
        <div className="PostDetail-icons-div">
          <FontAwesomeIcon icon={faPenSquare} onClick={toggleShowForm} />
          <FontAwesomeIcon icon={faTrashAlt} onClick={handleTrashClick} />
        </div>
      </div>
      <div className="PostDetail-subheading">
        <h2>{post.description}</h2>
        <div className="PostDetail-vote-div">
          <span>{post.votes} Votes</span>      
          <FontAwesomeIcon className="PostDetail-thumbsup" icon={faThumbsUp} onClick={clickThumbsUp} />
          <FontAwesomeIcon className="PostDetail-thumbsdown" icon={faThumbsDown} onClick={clickThumbsDown} />
        </div>
      </div>
      <p>{post.body}</p>
      <CommentList postId={id} comments={post.comments} />
    </div>
  )
}

export default PostDetail;
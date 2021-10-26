import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import CommentList from './CommentList';
import './PostDetail.css';


const PostDetail = ({id, post, removePost, toggleShowForm}) => {
 
  const handleTrashClick = () => {
    removePost(post.id);
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
      <h2>{post.description}</h2>
      <p>{post.body}</p>
      <CommentList postId={id} comments={post.comments} />
    </div>
  )
}

export default PostDetail;
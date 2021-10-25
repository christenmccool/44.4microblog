import React, { useState, useContext } from 'react';
import PostContext from './PostContext';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import PostForm from './PostForm';
import CommentList from './CommentList';
import './PostDetail.css';


const PostDetail = ({editPost, removePost, addComment, removeComment}) => {
  const [showForm, setShowForm] = useState(false);

  const posts = useContext(PostContext);
  const {id} = useParams();

  const post = posts.find(post => post.id === id);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }

  const handleTrashClick = () => {
    removePost(id);
  }

  if (!post) {
    return (
      <div className="PostDetail">
        <h1>{`Post ${id} does not exist`}</h1>
      </div>
    )
  }

  if (showForm) {
    return (
      <PostForm postData={post} editPost={editPost} toggleShowForm={toggleShowForm}/>
    )
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
      <CommentList postId={post.id} comments={post.comments} addComment={addComment} removeComment={removeComment} />
    </div>
  )
}

export default PostDetail;
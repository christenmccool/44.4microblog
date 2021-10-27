import React from 'react';
import {useDispatch} from 'react-redux';
import CommentForm from './CommentForm';
import { postCommentToAPI, deleteCommentFromAPI } from './actions';
import Comment from './Comment';
import './CommentList.css'

const CommentList = ({postId, comments}) => {

  const dispatch = useDispatch();

  const addNewComment = (text) => {
    dispatch(postCommentToAPI(postId, text));
  }

  const removeComment = (commentId) => {
    dispatch(deleteCommentFromAPI(postId, commentId));
  }

  return (
    <div className="CommentList">
      <h1>Comments:</h1>
      {comments.map(comment => 
        <Comment key={comment.id} comment={comment.text} removeComment={() => removeComment(comment.id)} />
      )}
      <CommentForm postId={postId} addNewComment={addNewComment}/>
    </div>
  )
}

export default CommentList;
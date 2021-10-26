import React from 'react';
import {useDispatch} from 'react-redux';
import CommentForm from './CommentForm';
import { addComment, deleteComment } from './actions';
import { v4 as uuid } from 'uuid';
import Comment from './Comment';
import './CommentList.css'

const CommentList = ({postId, comments}) => {

  const dispatch = useDispatch();

  const addNewComment = (comment) => {
    dispatch(addComment(postId, {comment, id: uuid()}));
  }

  const removeComment = (commentId) => {
    dispatch(deleteComment(postId, commentId));
  }

  return (
    <div className="CommentList">
      <h1>Comments:</h1>
      {comments.map(comment => 
        <Comment key={comment.id} comment={comment.comment} removeComment={() =>removeComment(comment.id)} />
      )}
      <CommentForm postId={postId} addNewComment={addNewComment}/>
    </div>
  )
}

export default CommentList;
import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import './CommentList.css'

const CommentList = ({postId, comments, addComment, removeComment}) => {

  console.log(comments);
  return (
    <div className="CommentList">
      <h1>Comments:</h1>
      {comments.map(comment => 
        <Comment key={comment.id} postId={postId} commentId={comment.id} comment={comment.comment} removeComment={removeComment} />
      )}
      <CommentForm postId={postId} addComment={addComment} />
    </div>
  )
}

export default CommentList;
import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom';
import './CommentForm.css'

const CommentForm = ({postId, addComment, commentData, editComment}) => {

  const [comment, setComment] = useState(commentData ? commentData.comment : "");
  // const history = useHistory();

  const handleChange = (evt) => {
    setComment(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (commentData) {
      editComment(commentData.id, comment);
    } else {
      addComment(postId, comment);
    }
    setComment("");
  }

  const handleCancel = (evt) => {
    evt.preventDefault();
    setComment("");
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <input id="comment" name="comment" type="text" value={comment} onChange={handleChange} required/>
        <div className="CommentForm-btn-div">
          <button id="CommentForm-submit-btn" type="submit">Save</button>
          <button id="CommentForm-cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm;
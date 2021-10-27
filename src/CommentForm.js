import React, {useState} from 'react';
import './CommentForm.css'

const CommentForm = ({addNewComment}) => {

  const [comment, setComment] = useState("");

  const handleChange = (evt) => {
    setComment(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addNewComment(comment);
    setComment("");
  }

  const handleCancel = (evt) => {
    evt.preventDefault();
    setComment("");
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <input id="comment" name="comment" placeholder="New comment" type="text" value={comment} onChange={handleChange} required/>
        <div className="CommentForm-btn-div">
          <button id="CommentForm-submit-btn" type="submit">Save</button>
          <button id="CommentForm-cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm;
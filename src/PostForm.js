import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './PostForm.css'

const PostForm = ({postData, addPost, editPost, toggleShowForm}) => {
  const INITIAL_FORM = {
    title: "",
    description: "",
    body: ""
  }

  const [formData, setFormData] = useState(postData || INITIAL_FORM);
  const history = useHistory();

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (postData) {
      editPost(postData.id, formData);
    } else {
      addPost(formData);
    }
    setFormData(INITIAL_FORM);
  }

  const handleCancel = (evt) => {
    evt.preventDefault();
    if (postData) {
      toggleShowForm();
    } else {
      history.push('/');
    }
  }

  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" type="text" value={formData.title} onChange={handleChange} required/>
        <label htmlFor="description">Description:</label>
        <input id="description" name="description" type="text" value={formData.description} onChange={handleChange} required/>
        <label htmlFor="body">Body:</label>
        <textarea id="body" data-enable-grammarly="false" name="body" rows="10" onChange={handleChange} value={formData.body} required></textarea>
        <div className="PostForm-btn-div">
          <button id="PostForm-submit-btn" type="submit">Save</button>
          <button id="PostForm-cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default PostForm;
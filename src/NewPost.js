import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { postToAPI } from './actions';
import PostForm from './PostForm';

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewPost = (post) => {
    dispatch(postToAPI(post));
    history.push('/');
  }

  return (
    <PostForm addNewPost={addNewPost} />
  )
}

export default NewPost;
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { addPost } from './actions';
import { v4 as uuid } from 'uuid';
import PostForm from './PostForm';

const NewPost = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewPost = (post) => {
    const id = uuid();
    const newPost = {...post, comments: []};
    dispatch(addPost(id, newPost));
    localStorage.setItem("microblog-posts", JSON.stringify({...posts, [id]: newPost}));
    history.push('/');
  }

  return (
    <PostForm addNewPost={addNewPost} />
  )
}

export default NewPost;
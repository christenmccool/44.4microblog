import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getPostFromAPI, deleteFromAPI, putToAPI } from './actions';
import PostDetail from './PostDetail';
import PostForm from './PostForm';


const Post = () => {
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();

  const posts = useSelector(state => state.posts);
  const {id} = useParams();

  const dispatch = useDispatch();

  let post = posts[id]; 
  
  useEffect(() => {
    if (post) return;
    dispatch(getPostFromAPI(id));
    post = posts[id]; 
  }, [dispatch]);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }
  
  const editPostContent = (edPost) => {
    dispatch(putToAPI(id, edPost));
    setShowForm(false);
  }

  const removePost = () => {
    dispatch(deleteFromAPI(id));
    history.push('/');
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
      <PostForm postData={post} editPostContent={editPostContent} toggleShowForm={toggleShowForm}/>
    )
  }

  return (
    <PostDetail id={id} post={post} removePost={removePost} toggleShowForm={toggleShowForm} />
  )
}

export default Post;
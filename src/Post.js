import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { deletePost, editPost } from './actions';
import PostDetail from './PostDetail';
import PostForm from './PostForm';


const Post = () => {
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();

  const posts = useSelector(state => state.posts);
  const {id} = useParams();

  const post = posts[id];
  const dispatch = useDispatch();

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }
  
  const editPostContent = (edPost) => {
    dispatch(editPost(id, edPost));
    localStorage.setItem("microblog-posts", JSON.stringify({...posts, [id]: edPost}));
    setShowForm(false);
  }

  const removePost = () => {
    const remainingPosts = {...posts};
    delete remainingPosts[id];
    dispatch(deletePost(id));
    localStorage.setItem("microblog-posts", JSON.stringify(remainingPosts));
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
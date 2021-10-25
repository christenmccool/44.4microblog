import './App.css';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PostContext from './PostContext';
import NavBar from './NavBar';
import Routes from './Routes';
import { v4 as uuid } from 'uuid';

const App = () => {
  // const initalState = [
  //   {id: '1', title: "Blog Post 1", description: "This is my first blog post", body: "blah blah blah", comments: []},    
  //   {id: '2', title: "Blog Post 2", description: "This is my second blog post", body: "blah blah blah blah blah blah blah blah blah", comments: []},
  //   {id: '3', title: "Blog Post 3", description: "This is my third blog post", body: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah", comments: []}
  // ]
  // const [posts, setPosts] = useState(initalState);

  const postsInStorage = JSON.parse(localStorage.getItem("microblog-posts")) || [];
  const [posts, setPosts] = useState(postsInStorage);

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("microblog-posts", JSON.stringify(posts));
    history.push('/');
  }, [posts])


  const addPost = (post) => {
    setPosts([...posts, {...post, id: uuid(), comments: []}]);
  }

  const editPost = (id, edPost) => {
    setPosts(posts.map(post => {
      if (post.id === id) return edPost;
      return post;
    }))
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => {
      if (post.id === postId) return {...post, comments: [...post.comments, {comment, id: uuid()}]};
      return post;
    }))
  }

  const removeComment = (postId, commentid) => {
    setPosts(posts.map(post => {
      if (post.id === postId) return {...post, comments: post.comments.filter(comment => comment.id !== commentid)};
      return post;
    }))
  }


  return (
    <PostContext.Provider value={posts}>
      <div className="App">
        <NavBar />
        <Routes addPost={addPost} editPost={editPost} removePost={removePost} addComment={addComment} removeComment={removeComment}/>
      </div>
    </PostContext.Provider>
  );
}

export default App;

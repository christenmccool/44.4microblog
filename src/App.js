import './App.css';
import React, {useEffect, useState} from 'react';
import PostContext from './PostContext';
import NavBar from './NavBar';
import Routes from './Routes';
import { v4 as uuid } from 'uuid';

const App = () => {

  // const addComment = (postId, comment) => {
  //   setPosts(posts.map(post => {
  //     if (post.id === postId) return {...post, comments: [...post.comments, {comment, id: uuid()}]};
  //     return post;
  //   }))
  // }

  // const removeComment = (postId, commentid) => {
  //   setPosts(posts.map(post => {
  //     if (post.id === postId) return {...post, comments: post.comments.filter(comment => comment.id !== commentid)};
  //     return post;
  //   }))
  // }


  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;

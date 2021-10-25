import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import PostDetail from './PostDetail';

const Routes = ({ addPost, editPost, removePost, addComment, removeComment }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <PostForm addPost={addPost} />
      </Route>
      <Route exact path="/posts/:id">
        <PostDetail editPost={editPost} removePost={removePost} addComment={addComment} removeComment={removeComment}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;
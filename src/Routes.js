import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import Post from './Post';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewPost />
      </Route>
      <Route exact path="/posts/:id">
        <Post />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;
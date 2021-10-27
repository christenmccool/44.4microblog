import {LOAD_TITLES, LOAD_POST, ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes';
import axios from 'axios';

function getTitlesFromAPI() {
  return async function(dispatch) {
    let res = await axios.get('http://localhost:5000/api/posts');
    dispatch(gotTitles(res.data));
  };
}

function gotTitles(titles) {
  return { type: LOAD_TITLES, titles };
}

function getPostFromAPI(id) {
  return async function(dispatch) {
    let res = await axios.get(`http://localhost:5000/api/posts/${id}`);

    dispatch(gotPost(res.data));
  };
}

function gotPost(post) {
  return { type: LOAD_POST, post };
}

function postToAPI(post) {
  return async function(dispatch) {
    let res = await axios.post('http://localhost:5000/api/posts', post);
    dispatch(addPost(res.data.id, res.data));
  };
}

function addPost(id, post) {
  return {
    type: ADD_POST,
    id,
    post
  }
}

function deleteFromAPI(id) {
  return async function(dispatch) {
    let res = await axios.delete(`http://localhost:5000/api/posts/${id}`);
    dispatch(deletePost(id));
  };
}


function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

function putToAPI(id, post) {
  return async function(dispatch) {
    let res = await axios.put(`http://localhost:5000/api/posts/${id}`, post);
    dispatch(editPost(res.data.id, res.data));
  };
}

function editPost(id, post) {
  return {
    type: EDIT_POST,
    id,
    post
  }
}

function postCommentToAPI(postId, text) {
  return async function(dispatch) {
    let res = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, {text});
    dispatch(addComment(postId, res.data.id, res.data.text));
  };
}


function addComment(postId, commentId, text) {
  return {
    type: ADD_COMMENT,
    postId,
    commentId,
    text
  }
}

function deleteCommentFromAPI(postId, commentId) {
  return async function(dispatch) {
    let res = await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}`);
    dispatch(deleteComment(postId, commentId));
  };
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
}


export {getTitlesFromAPI, getPostFromAPI, postToAPI, deleteFromAPI, putToAPI, postCommentToAPI, deleteCommentFromAPI};
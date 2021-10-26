import {ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes';

function addPost(id, post) {
  return {
    type: ADD_POST,
    id,
    post
  }
}

function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

function editPost(id, post) {
  return {
    type: EDIT_POST,
    id,
    post
  }
}

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  }
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
}


export {addPost, deletePost, editPost, addComment, deleteComment};
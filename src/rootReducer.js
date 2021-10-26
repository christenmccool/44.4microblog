import {ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes';

const postsInStorage = JSON.parse(localStorage.getItem("microblog-posts")) || {};

const INITIAL_STATE = {posts: postsInStorage};

const rootReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {...state, posts: {...state.posts, [action.id]: {...action.post} }}
    }

    case DELETE_POST: {
      const updatedPosts = {...state.posts};
      delete updatedPosts[action.id];
      return ({...state, posts: updatedPosts});
    }

    case EDIT_POST: {
      const updatedPosts = {...state.posts};
      updatedPosts[action.id] = action.post;
      return ({...state, posts: updatedPosts});
    }

    case ADD_COMMENT: {
      const post = state.posts[action.postId];
      console.log(post);
      return {...state, posts: {...state.posts, [action.postId]: 
                                                  {...post, comments: [...post.comments, action.comment]}
                                }
              }
    }

    case DELETE_COMMENT: {
      const post = state.posts[action.postId];
      const updatedComments = post.comments.filter(comment => comment.id !== action.commentId);
      return {...state, posts: {...state.posts, [action.postId]: 
                                                  {...post, comments: updatedComments}
                                }
              }
    }
    

    default: return state;
  }
} 

export default rootReducer;
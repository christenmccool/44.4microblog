import {LOAD_TITLES, LOAD_POST, ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes';

const INITIAL_STATE = {titles: [], posts: {}};

const rootReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_TITLES: {
      return {...state, titles: [...action.titles] };
    }

    case LOAD_POST: {
      return {...state, posts: {...state.posts, [action.post.id]: {...action.post} }}
    }

    case ADD_POST: {
      return {...state, 
              titles: [...state.titles, {id: action.id, title: action.post.title, description: action.post.description}],
              posts: {...state.posts, [action.id]: {...action.post, comments: []} }}
    }

    case DELETE_POST: {
      const updatedPosts = {...state.posts};
      delete updatedPosts[action.id];
      return ({...state, 
               titles: state.titles.filter(ele => ele.id !== action.id), 
               posts: updatedPosts});
    }

    case EDIT_POST: {
      const updatedPosts = {...state.posts};
      updatedPosts[action.id] = {...action.post, comments: state.posts[action.id].comments};
      const updatedTitles = state.titles.map(ele => ele.id===action.id ? 
                                                {id: action.id, title: action.post.title, description: action.post.description} 
                                                : ele);
      return ({...state, titles: updatedTitles, posts: updatedPosts});
    }

    case ADD_COMMENT: {
      const post = state.posts[action.postId];
      return {...state, posts: {...state.posts, [action.postId]: 
                                                  {...post, comments: [...post.comments, 
                                                                       {id: action.commentId, text: action.text}]}
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
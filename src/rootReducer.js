import {LOAD_TITLES, LOAD_POST, ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, VOTE_POST} from './actionTypes';

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
              titles: [...state.titles, {id: action.id, title: action.post.title, description: action.post.description, votes: 0}],
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
      updatedPosts[action.id] = {...action.post, comments: state.posts[action.id].comments, votes: state.posts[action.id].votes};
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
    
    case VOTE_POST: {
      let updatedVotes;
      
      if (state.posts[action.postId]) {
        updatedVotes = action.direction === 'up' ? state.posts[action.postId].votes + 1 
        : state.posts[action.postId].votes - 1;
      } else {
        const title = state.titles.filter(ele => ele.id === action.postId)[0];
        updatedVotes = action.direction === 'up' ? title.votes + 1
                                                  : title.votes - 1;
      }


      const updatedPosts = {...state.posts};
      updatedPosts[action.postId] = {...state.posts[action.postId],
                                      votes: updatedVotes};
      
      const updatedTitles = state.titles.map(ele => ele.id===action.postId ? 
                  {...ele, votes: updatedVotes}
                  : ele);

      return {...state, posts: updatedPosts, titles: updatedTitles};
    }

    default: return state;
  }
} 

export default rootReducer;
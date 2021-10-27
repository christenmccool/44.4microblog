import { render, waitFor } from '@testing-library/react';
import TitleList from './TitleList';
import {MemoryRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

import actions from './actions';
// jest.mock('./actions');


jest.mock('./actions', () => {
  return(
    { getTitlesFromAPI: jest.fn().mockResolvedValue({}) }
  )
});

// jest.mock('./actions', () => {
//   return(
//     { getTitlesFromAPI: jest.fn().mockImplementation( () => {
//       return (
//         {
//           type: 'LOAD_TITLES', 
//           titles: [
//             {
//             id: 100, 
//             title: 'Test Title', 
//             description: 'This is a test description',
//             votes: 0
//             }
//           ]
//         }
//       )
//     })
//   })
// });

beforeEach(() => {
  actions.getTitlesFromAPI.mockImplementationOnce( () => {
    return (
      {
        type: 'LOAD_TITLES', 
        titles: [
          {
          id: 100, 
          title: 'Test Title', 
          description: 'This is a test description',
          votes: 0
          }
        ]
      }
    )
  });
})

test('renders without crashing', () => {
  render( <Provider store={store}>
           <MemoryRouter>
             <TitleList />
            </MemoryRouter>
          </Provider>);
});

test('matches snapshot', () => {
  const {useFragment} = render( <Provider store={store}>
                                        <MemoryRouter>
                                          <TitleList />
                                        </MemoryRouter>
                                      </Provider>);
  expect(useFragment).toMatchSnapshot();
});

test('titles are loaded from API', async () => {
  const {debug, getByText} = render( <Provider store={store}>
                            <MemoryRouter>
                              <TitleList />
                            </MemoryRouter>
                          </Provider>);
  await waitFor(() => expect(getByText(`Test Title`, {exact: false})).toBeInTheDocument());
  expect(actions.getTitlesFromAPI).toBeCalledTimes(1);
  debug();
});







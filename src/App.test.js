import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './rootReducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

test('renders without crashing', () => {
  render( <Provider store={store}>
           <MemoryRouter>
             <App />
            </MemoryRouter>
          </Provider>);
});

test('matches snapshot', () => {
  const {useFragment} = render( <Provider store={store}>
                                  <MemoryRouter>
                                    <App />
                                    </MemoryRouter>
                                  </Provider>
                                );
  expect(useFragment).toMatchSnapshot();
});






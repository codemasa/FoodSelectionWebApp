import {Creators, Actions} from './actions.js';
import actions from './operations.js';
import thunk from 'redux-thunk';
import types from './types'
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import reducer from './reducers.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        recipeID: 0,
        recipe: null,
        formData: null,
        basket: []
      }
    );
  });
});

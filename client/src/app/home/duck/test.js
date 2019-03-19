import {Creators, Actions} from './actions.js';
import actions from './operations.js';
import thunk from 'redux-thunk';
import types from './types'
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });
  it('creates RECEIVE_RECIPE_ID when ', (recipeData) => {
    fetchMock.getOnce('https://chef-stefan-backend.herokuapp.com/chefstefandb',{
      recipeData,
      headers: { 'content-type': 'application/json' }

    })
    const expectedActions = [
      { type: types.REQUEST_RECIPE_ID },
      { type: types.RECEIVE_RECIPE_ID,
        recipeData: [
          {
            recipeID:1,
            recipeName:"Pizza",
            recipeType:"Lunch",
            recipeDiet:"Vegetarian",
            recipeDescription:"Margherita Pizza",
            recipeAllergens:"Wheat"},
          {
            recipeID:2,
            recipeName:"Spicy Tomato Pasta",
            recipeType:"Dinner",
            recipeDiet:"Vegetarian",
            recipeDescription:"Pasta with peppers and red sauce",
            recipeAllergens:null
          }
        ]
      }
    ]
    const store = mockStore({home: {}});
    return store.dispatch(actions.fetchRecipes()).then(() =>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

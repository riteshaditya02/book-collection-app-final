import {  combineReducers, applyMiddleware } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createBookReducer } from '../reducers/books/craeateBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';
import userProfileReducer from '../reducers/users/userProfileReducer';
import userUpdateReducer from '../reducers/users/userUpdateReducer';
import usersListReducer from '../reducers/users/userListReducer';
import bookDetailReducer from '../reducers/books/bookDetailsReducer';

const middlewares = [thunk];

const reducer = combineReducers({
  userLogin: userReducer,
  userProfile: userProfileReducer,
  updatedUser: userUpdateReducer,
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  bookDetails: bookDetailReducer,
  usersList: usersListReducer,
});

//Get user from localstorage and save it into our store

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};

const store = configureStore(
  {reducer},
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
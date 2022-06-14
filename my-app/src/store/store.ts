import { configureStore } from '@reduxjs/toolkit';
import { Character } from '../models/character';
import { characterReducer } from '../reducers/characterReducer';

export interface iState {
  characters: Array<Character>;
}

const preloadedState = {
  characters: [],
};

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  preloadedState,
});

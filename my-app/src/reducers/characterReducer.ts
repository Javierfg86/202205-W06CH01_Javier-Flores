import { createReducer } from '@reduxjs/toolkit';
import { Character } from '../models/character';
import * as ac from './action.creators';

const initialState: Array<Character> = [];
export const characterReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(ac.loadCharactersAction, (state, action) => [...action.payload])
    .addCase(ac.addCharacterAction, (state, action) => [
      ...state,
      action.payload,
    ])
    .addCase(ac.updateCharacterAction, (state, action) =>
      state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    )
    .addCase(ac.deleteCharacterAction, (state, action) =>
      state.filter((item) => item.id !== action.payload.id)
    )
    .addDefaultCase((state) => state);
});

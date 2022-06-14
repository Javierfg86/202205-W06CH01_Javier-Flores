import { createAction } from '@reduxjs/toolkit';
import { Character } from '../models/character';
import { actionTypes } from './action.types';

/* export interface iAction {
  type: actionTypes;
  payload?: any;
} */

export const loadCharactersAction = createAction<Array<Character>>(
  actionTypes['character@load'].toLocaleString()
);

export const addCharacterAction = createAction<Character>(
  actionTypes['character@add'].toLocaleString()
);

export const updateCharacterAction = createAction<Character>(
  actionTypes['character@update'].toLocaleString()
);
export const deleteCharacterAction = createAction<Character>(
  actionTypes['character@delete'].toLocaleString()
);

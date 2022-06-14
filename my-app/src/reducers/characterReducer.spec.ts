import { Character } from '../models/character';
import { characterReducer } from './characterReducer';
import * as ac from './action.creators';

const mockCharacter: Character = {
  id: 0,
  name: '',
  family: '',
  weapon: '',
  alive: true,
};

describe('Given our reducer', () => {
  describe('When calling with load action', () => {
    test('Should load an array of mockCharacter', () => {
      const newState = characterReducer(
        [],
        ac.loadCharactersAction([mockCharacter])
      );

      expect(newState).toEqual([mockCharacter]);
    });
  });
  describe('When calling with add action', () => {
    test('Should add a character', () => {
      const newState = characterReducer(
        [],
        ac.addCharacterAction(mockCharacter)
      );

      expect(newState).toEqual([mockCharacter]);
    });
  });
  describe('When calling with update action', () => {
    test('Should update state', () => {
      const newState = characterReducer(
        [],
        ac.updateCharacterAction(mockCharacter)
      );

      expect(newState).toEqual([]);
    });
  });
  describe('When calling with delete action', () => {
    test('Should delete item', () => {
      const newState = characterReducer(
        [mockCharacter],
        ac.deleteCharacterAction(mockCharacter)
      );

      expect(newState).toEqual([]);
    });
  });
});

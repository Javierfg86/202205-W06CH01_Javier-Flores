import { Character } from '../models/character';

export async function getCharacterList(): Promise<Array<Character>> {
  return [
    {
      id: Character.generateId(),
      name: 'Tyrion',
      family: 'Lannister',
      weapon: 'Books',
      alive: true,
    },
    {
      id: Character.generateId(),
      name: 'Ned',
      family: 'Stark',
      weapon: 'Sword',
      alive: false,
    },
  ];
}

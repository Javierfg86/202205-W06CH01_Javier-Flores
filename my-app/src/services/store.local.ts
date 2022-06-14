import { getCharacterList } from '../data/characters';
import { Character } from '../models/character';

export class StoreClass {
  constructor(public localStore: string = 'characters') {}

  async firstSetCharacter() {
    const characters = await getCharacterList();
    console.log({ characters });
    this.setcharacters(characters);
    return characters;
  }

  async getcharacters(): Promise<Array<Character>> {
    return localStorage.getItem(this.localStore)
      ? JSON.parse(localStorage.getItem(this.localStore) as string)
      : await this.firstSetCharacter();
  }

  setcharacters(characters: Array<Character>): void {
    localStorage.setItem(this.localStore, JSON.stringify(characters));
  }

  deletecharacters(): void {
    localStorage.removeItem(this.localStore);
  }
}

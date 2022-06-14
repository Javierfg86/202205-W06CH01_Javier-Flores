export interface iCharacter {
  id: number;
  name: string;
  family: string;
  weapon: string;
  alive: boolean;
}
export class Character implements iCharacter {
  id: number;
  alive = true;
  static generateId(): number {
    return Math.ceil(Math.random() * 1000);
  }
  constructor(
    public name: string,
    public family: string,
    public weapon: string
  ) {
    this.alive = true;
    this.id = Character.generateId();
  }
}

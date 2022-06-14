import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import { CharacterGoT } from '../character/character';

export function List() {
  const characters = useSelector((state: iState) => state.characters);

  return (
    <>
      <p>Characters</p>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterGoT character={character} />
          </li>
        ))}
      </ul>
    </>
  );
}

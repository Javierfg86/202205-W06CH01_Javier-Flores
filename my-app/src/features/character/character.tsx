import { useDispatch } from 'react-redux';
import { Character } from '../../models/character';
import * as ac from '../../reducers/action.creators';

export function CharacterGoT({ character }: { character: Character }) {
  const dispatch = useDispatch();

  /* const handleChange = () => {
    dispatch(ac.updateCharacterAction(character));
  }; */

  const handleClick = () => {
    dispatch(ac.deleteCharacterAction(character));
  };

  return (
    <>
      <h3>Prueba</h3>
      <h3>{character.name}</h3>
      <p>{character.family}</p>

      <button onClick={handleClick}>Delete</button>
    </>
  );
}

import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as ac from '../../reducers/action.creators';
import { Character } from '../../models/character';
export function Add() {
  const families = ['Lannister', 'Stark', 'Baratheon', 'Targaryen'];
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    family: '',
    weapon: '',
    alive: true,
  });

  function handleSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    dispatch(
      ac.addCharacterAction(
        new Character(formData.name, formData.family, formData.weapon)
      )
    );
  }

  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    const value = element.type === 'checkbox' ? element.checked : element.value;
    setFormData({ ...formData, [element.name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <select
          name="family"
          id=""
          value={formData.family}
          onChange={handleChange}
          required
        >
          <option></option>
          {families.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          name="weapon"
          placeholder="weapon"
          value={formData.weapon}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="alive">Is alive?</label>
        <input
          type="checkbox"
          name="alive"
          id="isAlive"
          checked={formData.alive}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
}

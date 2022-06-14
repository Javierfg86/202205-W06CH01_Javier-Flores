import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../features/addCharacter/addCharacter';
import { List } from '../features/list/list';
import * as ac from '../reducers/action.creators';
import { StoreClass } from '../services/store.local';
import { iState } from '../store/store';

export function HomePage() {
  const store = useMemo(() => new StoreClass(), []);
  return (
    <main>
      <h2>Characters</h2>
      <Add></Add>
      <List></List>
    </main>
  );
}

export default HomePage;

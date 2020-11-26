import React, { useState } from 'react';

import { randInt } from './data/utils';
import { STANDARD } from './data/sets/archetypes';
import { exampleToString } from './data/trop';

import style from './App.module.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const [index, setIndex] = useState<number>(0);

  const list = STANDARD;
  const ex = list[index];

  const next = () => setIndex(i => (i + 1) % list.length);
  const random = () => setIndex(randInt(list.length));
  return (
    <div className={style.main}>
      <h1 className={style.title}>Trop Cards</h1>
      <Card key={ex.name} name={ex.name} hebrewText={exampleToString(ex)} />
      <div className={style.row}>
        <Button onClick={next}>Next</Button>
        <Button onClick={random}>Random</Button>
      </div>
      <div className={style.row}>
        {ex.audio?.map((url) => <audio key={url} src={url} controls />)}
      </div>
    </div>
  );
}

export default App;



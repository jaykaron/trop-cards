import React, { useState } from 'react';
import style from './App.module.css';
import Button from './components/Button';
import Card from './components/Card';
import { ALL_BARA, exampleToString } from './data/trop';

function App() {
  const [index, setIndex] = useState<number>(0);

  const ex = ALL_BARA[index];

  return (
    <div className={style.main}>
      <h1 className={style.title}>Trop Cards</h1>
      <Card key={ex.name} name={ex.name} hebrewText={exampleToString(ex)} />
      <Button onClick={() => setIndex(randomIndex())}>
        Random
      </Button>
    </div>
  );
}

export default App;


function randomIndex(): number {
  return Math.floor(Math.random() * ALL_BARA.length);
}



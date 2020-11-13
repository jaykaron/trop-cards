import React from 'react';
import style from './Card.module.css';

interface CardProps {
  name: string;
  hebrewText: string;
}

const Card : React.FC<CardProps> = ({ name, hebrewText }) => (
  <div className={style.main}>
    <h2>{name}</h2>
    <div className={style.hebrew_container}>
      <span className={style.hebrew_text}>{hebrewText}</span>
    </div>
  </div>
);

export default Card;

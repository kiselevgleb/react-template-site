/** Вывод меню, курсов, новостей */
import React from 'react';

function Item(props) {
  return (
    <ul>
      {props.item.map(m =>
        <li className={props.style}>{m}</li>)}
    </ul>
  );
}

export default Item;

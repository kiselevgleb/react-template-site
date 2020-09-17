/** Вывод меню */
import React from 'react';

function Menu(props) {

  return (
    <ul className="ul-menu">
      {props.menu.map(m =>
        <li className="li-menu">{m}</li>)}
    </ul>
  );
}

export default Menu;

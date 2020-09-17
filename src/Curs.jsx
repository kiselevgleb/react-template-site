/** Вывод курсов валют */
import React from 'react';

function Curs(props) {
  return (
    <ul className="curs">
      {props.curs.map(c =>
        <li className="li-curs">{c}</li>)}
    </ul>
  );
}

export default Curs;

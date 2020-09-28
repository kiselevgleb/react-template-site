/** Вывод модулей "Погода", "Посещаемое", "Карта", "Телепрограмма", "Эфир" */
import React from 'react';
const Modul = props =>
    <>
      {props.mod.map((mod) => <div className="modules"><h3>{mod.title}</h3><p>{mod.p1}</p><p>{mod.p2}</p><p>{mod.p3}</p></div>)}
    </>
export default Modul;

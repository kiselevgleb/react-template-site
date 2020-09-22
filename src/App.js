

import React from 'react';
import './App.css';
import Item from './Item';
import Modul from './Modul';

function App() {
  let news = ["Новость один", "Новость два", "Новость три", "Новость четыре", "Новость пять"]
  let curs = ["Курс $", "Курс EURO", "Курс нефть"]
  let menu = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "еще"]
  let modulesLeft = [{ title: 'Погода', p1: '+17' }, { title: 'Посещаемое', p1: 'Недвижимость', p2: 'Маркет', p3: 'Авто' }];
  let modulesCenter = [{ title: 'Карта', p1: 'Расписание' }, { title: 'Телепрограмма', p1: 'ТНТ', p2: 'Карусель', p3: 'Первый' }];
  let modulesRight = [{ title: 'Эфир', p1: 'Успех', p2: 'TV' }];

  const listModules = modulesLeft.map((mod) => <div className="modules"><h3>{mod.title}</h3><p>{mod.p1}</p><p>{mod.p2}</p><p>{mod.p3}</p></div>);
  const сenterModules = modulesCenter.map((mod) => <div className="modules"><h3>{mod.title}</h3><p>{mod.p1}</p><p>{mod.p2}</p><p>{mod.p3}</p></div>);
  const rightModules = modulesRight.map((mod) => <div className="modules"><h3>{mod.title}</h3><p>{mod.p1}</p><p>{mod.p2}</p><p>{mod.p3}</p></div>);

  return (
    <div className="App">
      <div className="left-block-two">
        <h3>Сейчас в СМИ</h3>
        <Item item={news} style=""/> 
        {/* Вывод списка новостей */}
        <Item item={curs} style="li"/> 
        {/* Вывод курсов валют */}
      </div>
      <div className="menu">
        <Item item={menu} style="li"/> 
        {/* Вывод меню */}
      </div>
      <div className="search">
        <h4 className="logo">Лого</h4>
        <input className="search-inp"></input>
        <p className="exem">Например, текст</p>
        <div className="ban">
          <p>Banner</p>
        </div>
      </div>
      <div className="main inline">
        <div className="left-block">
          <Modul>{listModules}</Modul> 
          {/* Вывод модуля "Погода" и "Посещаемое" */}
        </div>
        <div className="content">
          <Modul>{сenterModules}</Modul> 
          {/* Вывод модуля "Карта" и "Телепрограмма" */}
        </div>
        <div className="right-block">
          <Modul>{rightModules}</Modul> 
          {/* Вывод модуля "Эфир" */}
        </div>
      </div>

    </div>
  );
}

export default App;

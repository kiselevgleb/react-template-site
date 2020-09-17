/** Вывод списка новостей */
import React from 'react';

function News(props) {

  return (
    <ul>
      {props.news.map(n =>
        <li>{n}</li>)}
    </ul>
  );
}

export default News;

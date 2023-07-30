import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const data = paintings[0];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Painting
//     url={data.url}
//     title={data.title}
//     authorUrl={data.author.url}
//     authorTag={data.author.tag}
//     price={data.price}
//   />
// );

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
// 			Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
// 		<p>Цена: {data.price}</p>
//     <p>Доступность:</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(painting);

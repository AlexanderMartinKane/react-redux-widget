import React, { Component } from 'react';
import './index.css';

const items = [
  ['Пакетные туры', 3],
  ['Ручное бронирование', 11],
  ['Отели', 1]
];

const total = items.reduce((sum, current) => {
  return sum + current[1];
}, 0);

const colors = [
  '#ace2f8',
  '#b1e19b',
  '#bfc0e4',
  '#ec9fd5',
  '#ecdb9f'
]

export default class Stats extends Component {
  render() {
    return (
      <section className="stats">
        <div className="stats-heading">Услуг</div>
        <div className="stats-items">
          <ul className="items-list">
            {
              items.sort((a, b) => b[1] - a[1]).map((item, index) => {
                return (
                  <li className="list-item" key={index}>
                    <div className="item-scale" style={{
                      "width": `${100 * item[1] / total}%`,
                      "backgroundColor": colors[Math.floor(Math.random() * 5)]
                    }}>
                      <div className="item-title">{item[0]}</div>
                    </div>
                    <div className="item-number">{item[1]}</div>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="stats-summary">
          <span className="stats-total">Всего</span>
          <span className="stats-total">{total}</span>
        </div>
      </section>
    );
  }
}

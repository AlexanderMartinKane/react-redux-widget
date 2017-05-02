import React, { Component } from 'react';
import picture from './pic.jpg';
import './index.css';

export default class Person extends Component {
  render() {
    return (
      <section className="greeting">
        <div className="person-picture">
          <img src={picture} alt="person" />
        </div>
        <div className="person-info">
          <div className="person-about">
            <header className="person-name">
              Вероника Ростова
            </header>
            <div className="person-position">
              Менеджер по продажам
            </div>
          </div>
          <div className="person-description">
            <div>Подберу для вас самые лучшие предложения.</div>
            <div>Мои услуги абсолютно бесплатны.</div>
          </div>
        </div>
      </section>
    );
  }
}
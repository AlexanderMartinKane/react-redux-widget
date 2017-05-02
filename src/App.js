import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadComments } from './redux/comments';

import Person from './containers/Person';
import Stats from './containers/Stats';
import Comments from './containers/Comments';
import Write from './containers/Write';

import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(loadComments());
  }

  render() {
    return (
      <main className="widget">
        <section className="profile">
          <Person />
          <Stats />
          <Comments />
        </section>
        <section className="feedback-form">
          <Write />
        </section>
      </main>
    );
  }
}

export default connect()(App);
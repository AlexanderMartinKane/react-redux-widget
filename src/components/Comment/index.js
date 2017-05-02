import React, { Component } from 'react';

import './index.css';

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-info">
          <div className="comment-author">{this.props.author}</div>
          <div className="comment-date">{this.props.date}</div>
        </div>
        <div className="comment-text">{this.props.comment}</div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comment from '../../components/Comment';

import './index.css';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latest: true,
      likes: 131,
      activeFilter: {
        'color': 'black',
        'fontWeight': '700',
        'textDecoration': 'none',
      },
      inActiveFilter: {
        'color': '#005da1',
        'fontWeight': '500',
        'textDecoration': 'underline',
      }
    }
  }

  render() {
    let commentsToShow;

    if (this.state.latest === true) {
      commentsToShow = this.props.comments.sort((a, b) => a[0] - b[0]).slice(-3);
    } else {
      commentsToShow = [...this.props.comments];
    }

    return (
      <section className="feedbacks">

        <div className="feedback-control">

          <div className="feedback-filter">
            <div
              className="latest-feedbacks"
              style={this.state.latest !== true ? this.state.inActiveFilter : this.state.activeFilter}
              onClick={() => this.setState({ latest: true })}
            >
              Последние отзывы</div>
            <div
              className="all-feedbacks"
              style={this.state.latest === true ? this.state.inActiveFilter : this.state.activeFilter}
              onClick={() => this.setState({ latest: false })}
            >
              Все отзывы</div>
          </div>

          <div className="profile-stats">

            <div className="likes">
              <i
                className="fa fa-heart"
                aria-hidden="true"
                onClick={() => this.setState({ likes: this.state.likes + 1 })}
              />
              {this.state.likes}
            </div>

            <div className="feedbacks-number">
              <i className="fa fa-comment" aria-hidden="true" />
              {this.props.comments.length}
            </div>

          </div>

        </div>

        <ul className="comments-list">
          {
            commentsToShow.map((comment, index) => {
              return (
                <li className="comments-list-item" key={index}>
                  <Comment
                    author={comment[1]}
                    comment={comment[2]}
                    date={comment[3]} />
                </li>
              );
            })
          }
        </ul>

      </section>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments.comments };
}

export default connect(mapStateToProps)(Comments);
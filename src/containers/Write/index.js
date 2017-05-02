import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../redux/comments';

import './index.css';

class Write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  write = () => {
    this.props.dispatch(
      addComment(
        this.props.comments,
        ['Stranger', this.state.comment, new Date().toLocaleDateString()]
      )
    );
    this.setState({ comment: '' });
  }

  keydownHandler = event => {
    if (event.keyCode === 13 && event.ctrlKey && this.state.comment !== '') this.write();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler);
  }

  render() {
    return (
      <section className="write">
        <textarea
          className="textarea"
          value={this.state.comment}
          onChange={this.handleChange} />
        <button
          className="submit"
          onClick={this.write}
        >
          Написать консультанту
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments.comments };
}

export default connect(mapStateToProps)(Write);
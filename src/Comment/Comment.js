import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveChange(this.props.id, this.state.text);
    this.setState({ commentText: '' });
  }

  render() {
    const { onEdit, text } = this.props;

    return onEdit === false ? this.renderComment() : this.renderEditComment(text)
  }

  renderComment() {
    const { text,
            votes,
            id,
            thumbUpComment,
            thumbDownComment,
            editComment,
            removeComment } = this.props;

    return (
      <li>
        {text}
        <span> | votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        <button onClick={ () => { this.setState({ text }); editComment(id); } }
        >
        Edit
        </button>
        <button onClick={() => removeComment(id)}>Delete</button>
      </li>
    );
  }

  renderEditComment() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <textarea
          name='new comment message'
          cols="30"
          rows="1"
          onChange={e => this.handleChange(e)}
          value={this.state.text}
        ></textarea>
        <input type="submit" value='Save'/>
      </form>
    );
  }
}

export default Comment;
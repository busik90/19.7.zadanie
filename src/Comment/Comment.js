import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      onEdit: false
    }
  }

  editModeOn(text) {
    this.setState({ text, onEdit: true });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveChange(this.props.id, this.state.text);
    this.setState({onEdit: false});
  }

  render() {
    return this.state.onEdit === false ? this.renderComment() : this.renderEditComment()
  }

  renderComment() {
    const { text,
            votes,
            id,
            thumbUpComment,
            thumbDownComment,
            removeComment } = this.props;

    return (
      <li>
        {text}
        <span> | votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        <button onClick={() => this.editModeOn(text)}>Edit</button>
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
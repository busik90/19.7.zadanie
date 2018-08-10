import React from 'react';
import Comment from '../Comment/CommentContainer';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ''
    }
  }

  handleChange(e) {
    this.setState({ commentText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.commentText);
    this.setState({commentText: ''});
  }

  render() {
    return (
      <ul>
        <form onSubmit={e => this.handleSubmit(e)}>
          <textarea
            name="comment"
            cols="30"
            rows="1"
            onChange={e => this.handleChange(e)}
            value={this.state.commentText}
            placeholder='Comment message'
          ></textarea>
          <input type="submit" value='Dodaj komentarz'/>
        </form>
        {this.props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </ul>
    )
  }
}

export default CommentsList;
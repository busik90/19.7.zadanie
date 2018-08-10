import { connect } from 'react-redux';
import CommentsList from '../CommentsList/CommentsList';
import { comments } from '../actions';

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  addComment: text => dispatch(comments.add(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
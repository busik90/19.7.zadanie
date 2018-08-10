import { connect } from 'react-redux';
import Comment from './Comment';
import { comments } from '../actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: id => dispatch(comments.thumbUp(id)),
  thumbDownComment: id => dispatch(comments.thumbDown(id)),
  removeComment: id => dispatch(comments.remove(id))
});

export default connect(null, mapDispatchToProps)(Comment);
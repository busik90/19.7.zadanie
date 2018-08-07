import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
             REMOVE_COMMENT = 'REMOVE_COMMENT',
             EDIT_COMMENT = 'EDIT_COMMENT',
             THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
             THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const comments = {
  add: function(text) {
    return {
      type: ADD_COMMENT,
      text,
      id: uuid.v4()
    }
  },

  edit: function(id, text) {
    return {
      type: EDIT_COMMENT,
      id,
      text
    }
  },

  remove: function(id) {
    return {
      type: REMOVE_COMMENT,
      id
    }
  },

  thumbUp: function(id) {
    return {
      type: THUMB_UP_COMMENT,
      id
    }
  },

  thumbDown: function(id) {
    return {
      type: THUMB_DOWN_COMMENT,
      id
    }
  }
}

export { comments };
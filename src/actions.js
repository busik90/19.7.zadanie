import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
             REMOVE_COMMENT = 'REMOVE_COMMENT',
             EDIT_COMMENT = 'EDIT_COMMENT',
             SAVE_CHANGE = 'SAVE_CHANGE',
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

  edit: function(id) {
    return {
      type: EDIT_COMMENT,
      id
    }
  },

  saveChange: function(id, text) {
    return {
      type: SAVE_CHANGE,
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
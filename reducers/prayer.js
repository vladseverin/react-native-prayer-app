import moment from 'moment';
import uuidv1 from 'uuid/v1';

// CONSTANTS
const ADD_PRAYER = 'ADD_PRAYER';
const DELETE_PRAYER = 'DELETE_PRAYER';
const COUNTER_PRAYER = 'COUNTER_PRAYER';
const ADD_ANSWERED_PRAYER = 'ADD_ANSWERED_PRAYER';

// ACTION CREATORS
export const addPrayer = (text) => {
  return {
    type: ADD_PRAYER,
    payload: text,
  }
}

export const deletePrayer = (id) => {
  return {
    type: DELETE_PRAYER,
    payload: id,
  }
}

export const counterPrayer = (id) => {
  return {
    type: COUNTER_PRAYER,
    payload: id,
  }
}

export const addAnsweredPrayer = (id) => {
  return {
    type: ADD_ANSWERED_PRAYER,
    payload: id,
  }
}

// REDUCERS
const actionMap = {
  [ADD_PRAYER]: (state, action) => {
    return [
      ...state,
      {
        id: uuidv1(),
        answered: false,
        prayer: action.payload,
        date_created: moment().format('YYYY-MM-DD HH:mm:ss'),
        author: 'Vladislav',
        amoutnAuthorPrayered: 0,
        amountOtherPrayered: 0,
        members:  [
          {name: 'Author', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'},
        ],
        comments: [],
      }
    ]
  },
  [DELETE_PRAYER]: (state, action) => {
    return [
      ...state
        .filter(prayer => action.payload !== prayer.id),
    ]
  },
  [COUNTER_PRAYER]: (state, action) => {
    return [
      ...state
        .map(prayer => (
          action.payload === prayer.id
            ? { 
                ...prayer,
                amoutnAuthorPrayered: prayer.amoutnAuthorPrayered + 1,
                lastPrayer: moment().format('YYYY-MM-DD HH:mm:ss'),
              }
            : prayer
        ))
    ]
  },
  [ADD_ANSWERED_PRAYER]: (state, action) => {
    return [
      ...state
        .map(prayer => (
          action.payload === prayer.id
            ? { 
                ...prayer,
                answered: true,
              }
            : prayer
        ))
    ]
  },
}

export default function prayer(state = [], action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
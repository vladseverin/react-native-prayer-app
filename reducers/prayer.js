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
    type: COUNTER,
    payload: id,
  }
}

export const addAnsweredPrayer = (id) => {
  return {
    type: ADD_ANSWERED_PRAYER,
    payload: id,
  }
}

// INIT STATE
const initialState = [
  {
    id: 0,
    prayer: 'Prayer (text)',
    answered: false,
    date_created: '2018-10-29 18:35',
    author: 'AuthorName',
    amoutnAuthoPrayered: 5,
    amountOtherPrayered: 1,
    members: ['User1', 'User2', 'User3'],
    comments: [
      {name: 'User', text: 'Nice prayer'},
      {name: 'AuthorName', text: 'Thanx'}
    ],
  },
  {
    id: 1,
    prayer: 'Prayer 2 (text)',
    answered: true,
    date_created: '2018-10-29 18:35',
    author: 'AuthorName',
    amoutnAuthoPrayered: 5,
    amountOtherPrayered: 1,
    members: ['User1', 'User2', 'User3'],
    comments: [
      {name: 'User', text: 'Nice prayer'},
      {name: 'AuthorName', text: 'Thanx'}
    ],
  },
  {
    id: 2,
    prayer: 'Prayer 3 (text)',
    answered: true,
    date_created: '2018-10-29 18:35',
    author: 'AuthorName',
    amoutnAuthoPrayered: 5,
    amountOtherPrayered: 1,
    members: ['User1', 'User2', 'User3'],
    comments: [
      {name: 'User', text: 'Nice prayer'},
      {name: 'AuthorName', text: 'Thanx'}
    ],
  }
];

// REDUCERS
const actionMap = {
  [ADD_PRAYER]: (state, action) => {
    return [
      ...state,
      {
        id: uuidv1(),
        answered: false,
        prayer: action.payload,
        date_created: moment().format('YYYY-MM-DD HH:mm'),
        author: 'Vladislav',
        amoutnAuthoPrayered: 0,
        amountOtherPrayered: 0,
        members: [],
        comments: [],
      }
    ]
  },
  [DELETE_PRAYER]: (state, action) => {
    return [
      ...state,
    ]
  },
  [COUNTER_PRAYER]: (state, action) => {
    return [
      ...state,
    ]
  },
  [ADD_ANSWERED_PRAYER]: (state, action) => {
    return [
      ...state,
    ]
  },
}

export default function prayer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
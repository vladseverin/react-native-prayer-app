import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const data = { 
  prayer: [
    {
      id: 0,
      prayer: 'Prayer (text)',
      answered: false,
      date_created: '2018-10-29 18:35',
      author: 'AuthorName',
      lastPrayer: '2018-10-29 18:35',
      amoutnAuthorPrayered: 5,
      amountOtherPrayered: 1,
      members: [
        {name: 'Author', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'},
        {name: 'User1', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'}
      ],
      comments: [
        {name: 'User1', text: 'Hey!', datePublished: '2018-10-29 18:40', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'},
        {name: 'AuthorName', text: 'How u doing?', datePublished: '2018-10-29 18:55', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'}
      ],
    },
    {
      id: 2,
      prayer: 'Loremipsum dsf sd fs df',
      answered: false,
      date_created: '2018-10-29 18:35',
      author: 'AuthorName',
      lastPrayer: '2018-10-29 18:35',
      amoutnAuthorPrayered: 5,
      amountOtherPrayered: 1,
      members: [
        {name: 'Author', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'},
        {name: 'User1', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'}
      ],
      comments: [
        {name: 'User1', text: 'Hey!', datePublished: '2018-10-29 18:40', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'},
        {name: 'AuthorName', text: 'How u doing?', datePublished: '2018-10-29 18:55', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'}
      ],
    },
    {
      id: 3,
      prayer: 'Prayer 2 (text)',
      answered: true,
      date_created: '2018-10-29 18:35',
      lastPrayer: '2018-10-29 18:35',
      author: 'AuthorName',
      amoutnAuthorPrayered: 5,
      amountOtherPrayered: 1,
      members: [
        {name: 'Author', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'},
        {name: 'User1', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'}
      ],
      comments: [
        {name: 'User1', text: 'Hey!', datePublished: '2018-10-29 18:40', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'},
        {name: 'AuthorName', text: 'How u doing?', datePublished: '2018-10-29 18:55', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'}
      ],
    },
    {
      id: 4,
      prayer: 'Prayer 3 (text)',
      answered: true,
      date_created: '2018-10-29 18:35',
      lastPrayer: '2018-10-29 18:35',
      author: 'AuthorName',
      amoutnAuthorPrayered: 5,
      amountOtherPrayered: 1,
      members: [
        {name: 'Author', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'},
        {name: 'User1', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'}
      ],
      comments: [
        {name: 'User1', text: 'Hey!', datePublished: '2018-10-29 18:40', img: 'https://www.soccercric.com/uploads/news/images/1309164275952e2e897191.png'},
        {name: 'AuthorName', text: 'How u doing?', datePublished: '2018-10-29 18:55', img: 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg'}
      ],
    }
  ]
};

export const store = createStore(rootReducer, data);

store.subscribe(() => {
  console.log('Store:', store.getState());
});
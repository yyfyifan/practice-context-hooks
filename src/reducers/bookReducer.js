import { actionTypes } from '../actions/bookActions';
import { v4 as uuid } from 'uuid';


const bookReducer = (booksState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BOOK:
            return [...booksState, { title: action.title, author: action.author, id: uuid() }];
        case actionTypes.DEL_BOOK:
            return booksState.filter(book => book.id !== action.id);
        default:
            return booksState;
    }

}
export default bookReducer;
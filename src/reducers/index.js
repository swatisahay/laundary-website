import selectedOrderReducer from './selected-order-reducer';
import orderListReducer from './order-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedOrder: selectedOrderReducer,
  masterOrderList: orderListReducer
});

export default rootReducer;

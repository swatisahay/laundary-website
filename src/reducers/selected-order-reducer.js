import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_ORDER:
    return action.orderId;
  default:
    return state;
  }
};

import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { names, emailAddress, preferredPickup, preferredDelivery, address, phoneNumber, numberOfBags, anySpecialInstruction, id, formattedWaitTime } = action;

  switch (action.type) {
  case c.ADD_ORDER:
    newState = Object.assign({}, state, {
      [id]: {
        names : names,
        emailAddress: emailAddress,
        prefferredPickup: preferredPickup,
        preferredDelivery: preferredDelivery,
        address: address,
        phoneNumber: phoneNumber,
        numberOfBags: numberOfBags,
        anySpecialInstruction: anySpecialInstruction,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;
  case c.UPDATE_TIME:
    const newOrder = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newOrder
    });
    return newState;
  case c.RECEIVE_ORDER:
    newState = Object.assign({}, state);
    newState[action.order.id] = action.order;
    return newState;
  default:
    return state;
  }
};

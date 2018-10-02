import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';
import Moment from 'Moment';

firebase.initializeApp(firebaseConfig);
const orders = firebase.database().ref('orders');

export function addOrder(_names, _emailAddress, _preferredPickup, _preferredDelivery, _address, _phoneNumber, _numberOfBags, _anySpecialInstruction) {
  return () => orders.push({
     names : _names,
     emailAddress: _emailAddress,
     prefferredPickup: _preferredPickup,
     preferredDelivery: _preferredDelivery,
     address: _address,
     phoneNumber: _phoneNumber,
     numberOfBags: _numberOfBags,
     anySpecialInstruction: _anySpecialInstruction,
    timeOpen: new Date().getTime()
  });
}

export function watchFirebaseOrdersRef() {
  return function(dispatch) {
    orders.on('child_added', data => {
      const newOrder = Object.assign({}, data.val(), {
        id: data.getKey(),
        formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
      });
      dispatch(receiveOrder(newOrder));
    });
  }
}

function receiveOrder(orderFromFirebase) {
  return {
    type: c.RECEIVE_ORDER,
    order: orderFromFirebase
  };
}

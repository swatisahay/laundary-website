
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect} from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Order(props){
  function handleSavingSelectedOrder(orderId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_ORDER,
      orderId: orderId
    };
    dispatch(action);
  }

  const orderInformation =
    <div>
      <h3>Name:{props.names} - Pickup: {props.preferredPickup} - Delivery: {props.preferredDelivery}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedOrder(props.orderId);}}>
        {orderInformation}
      </div>
    );
  } else {
    return (
      <div>
        {orderInformation}
      </div>
    );
  }
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Order.propTypes = {
  names: PropTypes.string.isRequired,
  preferredPickup: PropTypes.number.isRequired,
  preferredDelivery: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  orderId: PropTypes.string.isRequired

};

export default connect() (Order);

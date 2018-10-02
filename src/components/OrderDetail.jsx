
import React from 'react';
import PropTypes from 'prop-types';


function OrderDetail(props){
  return (
    <div>
      <hr/>
      <h1>Name: {props.selectedOrder.names}</h1>  <h3>Email:{props.selectedOrder.emailAddress}</h3>

      <h3>Pickup: {props.selectedOrder.preferredPickup}</h3>
      <h3>Delivery: {props.selectedOrder.preferredDelivery}</h3>
      <h3>Address: {props.selectedOrder.address}</h3>
      <h3>Mobile: {props.selectedOrder.phoneNumber}</h3>
      <h3>Bag quantity: {props.selectedOrder.numberOfBags}</h3>
      <h3>Special Instruction: {props.selectedOrder.anySpecialInstruction}</h3>
      <h4>Submitted {props.selectedOrder.formattedWaitTime}</h4>

      <hr/>
    </div>
  );
}

OrderDetail.propTypes = {
  selectedOrder: PropTypes.object
};

export default OrderDetail;

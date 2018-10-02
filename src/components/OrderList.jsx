import React from 'react';
import Order from './Order';
import PropTypes from 'prop-types';

function OrderList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.orderList).map(function(orderId) {
        var order = props.orderList[orderId];
        return <Order names={order.names}
          emailAddress={order.emailAddress}
          preferredPickup={order.preferredPickup}
          preferredDelivery={order.preferredDelivery}
          address={order.address}
          phoneNumber={order.phoneNumber}
          numberOfBags={order.numberOfBags}
          anySpecialInstruction={order.anySpecialInstruction}

          formattedWaitTime={order.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}

          key={orderId}
          orderId={orderId}/>;
      })}
    </div>
  );
}

OrderList.propTypes = {
  orderList: PropTypes.object,
  currentRouterPath: PropTypes.string

};
export default OrderList;

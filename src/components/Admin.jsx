
import React from 'react';
import PropTypes from 'prop-types';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';
import { connect} from 'react-redux';

function Admin(props){
  let optionalSelectedOrderContent = null;
  if (props.selectedOrder.length> 0){
    optionalSelectedOrderContent =  <OrderDetail selectedOrder={props.orderList[props.selectedOrder]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedOrderContent}

      <OrderList
        orderList={props.orderList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  );
}

Admin.propTypes = {
  orderList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  selectedOrder: PropTypes.string
};
const mapStateToProps = state => {
  return{
    selectedOrder: state.selectedOrder,
    orderList: state.masterOrderList
  };
};
export default connect(mapStateToProps) (Admin);

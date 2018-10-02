import React from 'react';
import Header from './Header';
import OrderList from './OrderList';
import Schedulepickup from './Schedulepickup'
import Home from './Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;
import * as actions from './../actions';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedOrder: null
    };
  }
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseOrdersRef } = actions;
    dispatch(watchFirebaseOrdersRef());
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateOrderElapsedWaitTime(),
    60000
    );
  }
  updateOrderElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterOrderList).map(orderId => {
      const order = this.props.masterOrderList[orderId];
      const newFormattedWaitTime = new Moment(order.timeOpen).from(new Moment());
      const action = {
        type: c.UPDATE_TIME,
        id: orderId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
    // var newMasterOrderList = Object.assign({}, this.state.masterOrderList);
    // Object.keys(newMasterOrderList).forEach(orderId => {
    //   newMasterOrderList[orderId].formattedWaitTime = (newMasterOrderList[orderId].timeOpen).fromNow(true);
    // });
    // this.setState({masterOrderList: newMasterOrderList});
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          // <Route exact path='/' render={()=><OrderList orderList={this.props.masterOrderList} />} />
          <Route path='/schedule' render={()=><Schedulepickup />} />
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname}
          />} />

        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterOrderList: state.masterOrderList
  };
};
App.propTypes = {
  masterOrderList: PropTypes.object
};
export default withRouter(connect(mapStateToProps)(App));

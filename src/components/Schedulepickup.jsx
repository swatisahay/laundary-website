import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
const { c } = constants;
import { addOrder } from './../actions';

function Schedulepickup(props){
  let _names = null;
  let _emailAddress = null;
  let _preferredPickup = null;
  let _preferredDelivery = null;
  let _address = null;
  let _phoneNumber = null;
  let _numberOfBags = null;
  let _anySpecialInstruction = null;


  function handleSchedulepickupSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addOrder(_names.value, _emailAddress.value, _preferredPickup.value, _preferredDelivery.value, address.value, _phoneNumber.value, _numberOfBags.value, _anySpecialInstruction.value ));
    _names.value = '';
    _emailAddress.value = '';
    _preferredPickup.value = '';
    _preferredDelivery.value = '';
    _address.value = '';
    _phoneNumber.value = '';
    _numberOfBags.value = '';
    _anySpecialInstruction.value = '';
  }

  return (
    <div>
      <form onSubmit={handleSchedulepickupSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='email'
          placeholder='Email Address'
          ref={(input) => {_emailAddress = input;}}/>
        <input
          type='text'
          id='pickup'
          placeholder='Preferred Pickup Day'
          ref={(input) => {_preferredPickup = input;}}/>
        <input
          type='text'
          id='delivery'
          placeholder='Preferred Pickup Day'
          ref={(input) => {_preferredDelivery = input;}}/>
        <input
          type='text'
          id='address'
          placeholder='Address'
          ref={(input) => {_address = input;}}/>
        <input
          type='text'
          id='phone'
          placeholder='Phone Number'
          ref={(input) => {_phoneNumber = input;}}/>
        <input
          type='text'
          id='noofbags'
          placeholder='Number of Bags'
          ref={(input) => {_numberOfBags = input;}}/>
        <textarea
          id='anyspecialinstruction'
          placeholder='Any Special Instruction'
          ref={(textarea) => {_anySpecialInstruction = textarea;}}/>
        <button type='submit'>Submit!</button>
      </form>
      <style jsx>{`
       .form-control {
         margin-bottom: 20px;
       }
       h3 {
         text-align: center;
       }
     `}</style>
     <style global jsx>{`
         body {
           background-color: #D2691E;
           background-size: cover;
           background-repeat:no-repeat;
         }
       `}</style>
    </div>
  );
}
Schedulepickup = connect()(Schedulepickup);

export default Schedulepickup;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser,onSetUser } from '../actions/login.jsx';
import ModuleComponent from '../components/moduleComponent.jsx';

const  mapStateToProps=(state)=>{
  return{
    authenticatedUser: state.user.status === 'authenticated' ? true : false,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser:()=>{
      dispatch(onSetUser(localStorage.jwtToken));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleComponent);
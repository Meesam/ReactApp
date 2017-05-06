import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModuleComponent from '../components/moduleComponent.jsx';

const  mapStateToProps=(state)=>{
  return{
    authenticatedUser: state.user.status === 'authenticated' ? true : false,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      localStorage.removeItem('jwtToken');
      dispatch(logoutUser());
    }
  }
}

export default connect(mapStateToProps, null)(ModuleComponent);
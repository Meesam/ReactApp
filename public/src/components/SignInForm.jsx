import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from '../common/renderField.jsx';
import { onLogin, onLoginSuccess, onLoginFailure, resetLogin,onInvalidLogin} from '../actions/login.jsx';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import '../../styles/css/signin.css';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Enter username';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const validateAndSignInUser = (values, dispatch) => {
  return dispatch(onLogin(values))
    .then((result) => {
      console.log('result on client ' , result);
     if (result.payload.status !== 200) {
          dispatch(onLoginFailure(result.payload.data));
          throw new SubmissionError(result.payload.data);

      } else if(result.payload.data==="Invalid credential"){
        dispatch(onInvalidLogin("Invalid Login details"));

      } else {
         localStorage.setItem('jwtToken', result.payload.data.token);
         setAuthorizationToken(result.payload.data.token);
         dispatch(onLoginSuccess(result.payload.data.token));
      }
    });
};



class SignInForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user) {
      this.context.router.push('/adminDashBoard');
     }
     else if (nextProps.user.status === 'invalidLogin') {
       this.context.router.push('/login');
     }
     else {
      this.context.router.push('/login');
    }
  }

  renderInvalidLoginMsg(status){
    if(status==="invalidLogin"){
      return(
        <div id="error-alert" className="alert alert-error alert-dismissable">
          <h4>  <i className="icon fa fa-check"></i> Faild!</h4>
          Invalid UserName or Password !
        </div>
      )
    } else{
      return(<div></div>)
    }
  }

  render() {
    const {asyncValidating, handleSubmit, submitting} = this.props;
    const {status} = this.props.user;
    return (
      <div>
        {this.renderInvalidLoginMsg(status)}
        <form className="form-signin" onSubmit={ handleSubmit(validateAndSignInUser) }>
          <h2 class="form-signin-heading">Please sign in</h2>
          <Field
                 name="username"
                 type="text"
                 className="form-control"
                 placeholder="User Name"
                 component={ renderField }
                 label="@username*" />
          <Field
                 name="password"
                 type="password"
                 className="form-control"
                 placeholder="Password"
                 component={ renderField }
                 label="Password*" />
          <div>
             <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                    disabled={ submitting }>
              Submit
            </button>
            <Link
                  to="/"
                  className="btn btn-lg btn-danger btn-block"> Cancel
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'SignInForm',
  validate
})(SignInForm)


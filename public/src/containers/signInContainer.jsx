import SignInForm from '../components/SignInForm.jsx';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
   resetMe: () =>{
    }
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
import { StackActions, CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const Preload = (props) => {
  if (!props.name) {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          CommonActions.navigate({
            name: 'Home',
          }),
        ],
      })
    );
  } else {
    // mandar tbm
  }

  return null;
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
  };
};

export default connect(mapStateToProps)(Preload);

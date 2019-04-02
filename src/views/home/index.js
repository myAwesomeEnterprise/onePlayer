import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sayHi} from './../../redux/actions';
import HomeScreen from './screen';

const mapStateToProps = state => ({
  name: state.helloWorld.name,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({sayHi}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

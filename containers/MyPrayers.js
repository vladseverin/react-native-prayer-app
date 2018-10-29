import { bindActionCreators } from 'redux';
import { addPrayer } from '../reducers/prayer';
import MyPrayers from '../components/MainPage/MyPrayers';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    prayerList: state.prayer,
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPrayer,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPrayers);
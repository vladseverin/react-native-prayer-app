import { bindActionCreators } from 'redux';
import { 
  addPrayer, 
  deletePrayer, 
  counterPrayer,
  addAnsweredPrayer,
} from '../reducers/prayer';
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
    deletePrayer,
    counterPrayer,
    addAnsweredPrayer,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPrayers);
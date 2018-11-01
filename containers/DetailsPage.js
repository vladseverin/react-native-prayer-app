import { bindActionCreators } from 'redux';
import { 
  addPrayer, 
  deletePrayer, 
  counterPrayer,
  addAnsweredPrayer,
} from '../reducers/prayer';
import DetailsPage from '../components/DetailsPage/DetailsPage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    prayerList: state.prayer,
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    counterPrayer,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
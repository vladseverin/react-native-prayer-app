import { bindActionCreators } from 'redux';
import { 
  counterPrayer,
  addComment,
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
    addComment
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
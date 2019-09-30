import { connect } from 'react-redux';

import { Booking } from '../components/booking/booking';
import { roomInfo } from '../reducers';
import { selectRoom, selectOccupant, deSelectRoom, initState }
  from '../reducers/actions-creators';

const mapDispatchToProps = {
  selectRoom: selectRoom,
  deSelectRoom: deSelectRoom,
  selectOccupant: selectOccupant,
  initState: initState
}

const mapStateToProps = (state) => ({
  appState: state,
  bookingInfo: roomInfo(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);

import React from 'react'
import { connect } from 'react-redux'
import { Booking } from '../components/booking/booking'
import {
  selectRoom, selectOccupant,
  deSelectRoom, getRooms, getSelectedRooms, getOccupants, getSelectedRoomIds,
  resetSelection, initState
} from '../reducers/actions-creators';

import { roomInfo } from '../reducers'

const mapDispatchToProps = {
  selectRoom: selectRoom,
  deSelectRoom: deSelectRoom,
  resetSelection: resetSelection,
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
)(Booking)

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

function generateRooms() {
  const TOTAL_ROOMS = 4;
  const rooms = Array(TOTAL_ROOMS).fill(1)
    .map((v, i) => ({
      roomId: i,
      title: `Room ${i + v}`,
      available: true,
      selected: false,
      adults: 0,
      children: 0
    }))
    .reduce((byId, room) => {
      byId[room.roomId] = room;
      return byId;
    }, {});

  rooms[0].available = false;

  return rooms;
}

const AppInitialState = {
  rooms: generateRooms(),
  selectedRoomIds: [],
  occupants: {

  },
  savedBooking: {}
}

export const actionTypes = {
  SELECT_ROOM: 'SELECT_ROOM',
  DESELECT_ROOM: 'DESELECT_ROOM',
  RESET_SELECTION: 'RESET_SELECTION',
  SELECT_OCCUPANT: 'SELECT_OCCUPANT',
  SAVE_BOOKING: 'SAVE_BOOKING'
}

// REDUCERS
export const reducer = (state = AppInitialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ROOM:
      return {
        ...state,
        selectedRoomIds: [
          ...state.selectedRoomIds,
          action.roomId
        ]
      };
    case actionTypes.DESELECT_ROOM:
      return {
        ...state,
        selectedRoomIds: state.selectedRoomIds.filter(roomId => roomId !== action.roomId)
      };

    case actionTypes.RESET_SELECTION:
      return {
        ...state,
        selectedRoomIds: [],
        occupants: {}
      };

    case actionTypes.SELECT_OCCUPANT:
      return {
        ...state,
        occupants: {
          ...state.occupants,
          [action.roomId]: {
            ...state.occupants[action.roomId],
            [action.occupant_type]: action.qty
          }
        }
      };
    case actionTypes.SAVE_BOOKING:
      return state;
    default:
      return state
  }
}

// ACTIONS
export const selectRoom = (roomId) => {
  return { type: actionTypes.SELECT_ROOM, roomId };
}
export const deSelectRoom = (roomId) => {
  return { type: actionTypes.DESELECT_ROOM, roomId };
}

export const resetSelection = () => {
  return { type: actionTypes.RESET_SELECTION };
}
export const selectOccupant = (roomId, occupant_type, qty) => {
  return { type: actionTypes.SELECT_OCCUPANT, roomId, occupant_type, qty };
}

export const saveBooking = () => {
  return { type: actionTypes.SAVE_BOOKING }
}


// selector
export const getSelectedRoomIds = (state) => state.selectedRoomIds;
export const getSelectedRooms = (state) => state.selectedRoomIds.map(roomId => state.rooms[roomId]);
export const getOccupants = (state) => state.occupants;
export const getRooms = (state) => Object.values(state.rooms);




// init store
export function initializeStore(initialState = AppInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
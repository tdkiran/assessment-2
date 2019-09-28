import { combineReducers } from 'redux';
import { actionTypes } from './actions-creators';
import { createSelector } from 'reselect';
import { defaultRoomInfo } from '../app_config';

function activeRooms(state = 1, action) {
    switch (action.type) {
        case actionTypes.SELECT_ROOM:
            return action.roomId + 1;
        case actionTypes.DESELECT_ROOM:
            return action.roomId + 1;
        default:
            return state
    }
}

function occupantSelectionInfo(state = [], action) {
    switch (action.type) {
        case actionTypes.SELECT_OCCUPANT: {
            return state
                .filter(occupantInfo => occupantInfo.roomId !== action.roomId)
                .concat(action.occupantInfo);
        }

        case actionTypes.SELECT_ROOM: {
            const activeRooms = action.roomId + 1;
            return state.filter(occupantInfo => occupantInfo.roomId <= activeRooms);
        }

        case actionTypes.DESELECT_ROOM: {
            const activeRooms = action.roomId + 1;
            return state.filter(occupantInfo => occupantInfo.roomId > activeRooms);
        }

        default:
            return state
    }
}
// Root Reducer
const reducer = combineReducers({
    activeRooms,
    occupantSelectionInfo
});
export default reducer;

// selector
export const getActiveRooms = state => state.activeRooms;
export const getOccupantSelectionInfo = state => state.occupantSelectionInfo;

export const roomInfo = createSelector(getActiveRooms, getOccupantSelectionInfo, (activeRooms, occupantSelectionInfo) => {
    const defaultRoom = { adult: 1, children: 0 };
    const currentRoomInfo = defaultRoomInfo.map(roomInfo => {
        const id = roomInfo.id;
        const occupantInfo = occupantSelectionInfo.find(occInfo => occInfo.id === id);
        occupantInfo ? { ...roomInfo, occupantInfo } : { ...roomInfo, defaultRoom };
    });
    return currentRoomInfo;
});
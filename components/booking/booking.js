import React, { Component } from 'react';
import { Room } from './room';
import styled from 'styled-components';

const BookingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start
`;

const RoomsContainer = styled.div`
    display: flex;
`;

export class Booking extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { initState } = this.props;
        const localState = JSON.parse(localStorage.getItem('bookings')) || null;

        if (localState) {
            initState(localState);
        }
    }

    saveBooking = () => {
        const { appState } = this.props;
        localStorage.setItem('bookings', JSON.stringify(appState));
    }

    onSelectionChange(room, selected) {
        const { rooms: _rooms, selectRoom, deSelectRoom, resetSelection } = this.props;
        const rooms = _rooms.filter(r => r.available);
        const index = rooms.indexOf(room);

        rooms.slice(0, index + 1).forEach(({ roomId }) => selectRoom(roomId));

        rooms.slice(index + 1).forEach(({ roomId }) => deSelectRoom(roomId));

        if (!selected) {
            deSelectRoom(room.roomId);
        }
    }

    render() {
        const { rooms, selectedRoomIds = [], selectOccupant } = this.props;

        return (<BookingContainer>
            <RoomsContainer>
                {
                    rooms.map((room) => {
                        return <Room {...room}
                            key={room.roomId}
                            selectOccupant={selectOccupant}
                            selected={selectedRoomIds.includes(room.roomId)}
                            onSelectionChange={this.onSelectionChange.bind(this, room)} />
                    })
                }
            </RoomsContainer>
            <button type="submit" onClick={this.saveBooking}>Submit</button>
        </BookingContainer>);
    }
}
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


    render() {
        const { bookingInfo, selectRoom, deSelectRoom, selectOccupant } = this.props;
        return (
            <BookingContainer>
                <RoomsContainer>
                    {bookingInfo.map(room => (
                        <Room {...room} selectRoom={selectRoom} deSelectRoom={deSelectRoom} selectOccupant={selectOccupant} key={room.roomId} />))
                    }
                </RoomsContainer>
                <button type="submit" data-testid="submit" onClick={this.saveBooking}>Submit</button>
            </BookingContainer>
        );
    }
}
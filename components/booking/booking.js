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

const SubmitForm = styled.button`
    padding: 10px;
    margin-left: 10px;
    border: solid 2px Gray;
    border-radius: 5px;
    background-color: #ddd;
    font-weight: bold;
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
        alert('Current selection have been saved');
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
                <SubmitForm type="submit" data-testid="submit" onClick={this.saveBooking}>Submit</SubmitForm>
            </BookingContainer>
        );
    }
}
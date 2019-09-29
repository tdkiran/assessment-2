import React, { Component } from 'react';
import { AppCard } from '../common/card';
import { RoomForm } from './room-form';

export class Room extends Component {
    selectOccupant = () => {
        this.props.selectOccupant(this.props.roomId)
    }

    render() {
        const { roomId,
            title, hideOption, selected,
            selectRoom,
            occupants = {}, active, deSelectRoom
        } = this.props;
        return (
            <AppCard roomId={roomId} title={title} hideOption={hideOption} active={active} selectRoom={selectRoom} deSelectRoom={deSelectRoom} testId={roomId}>
                <RoomForm selected={selected} occupants={occupants[roomId]} />
            </AppCard>);
    }
}
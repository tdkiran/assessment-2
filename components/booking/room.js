import React, { Component } from 'react';
import { AppCard } from '../common/card';
import { RoomForm } from './room-form';

export class Room extends Component {
    selectOccupant = () => {
        this.props.selectOccupant(this.props.roomId)
    }

    render() {
        debugger
        const { roomId,
            title, available, selected,
            onSelectionChange,
            selectOccupant, occupants = {} } = this.props;
        return (
            <AppCard title={title} selected={selected} selectable={available} onSelectionChange={onSelectionChange} testId={roomId}>
                <RoomForm selected={selected} occupants={occupants[roomId]} selectOccupant={this.selectOccupant} />
            </AppCard>);
    }
}
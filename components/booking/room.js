import React, { Component } from 'react';
import { AppCard } from '../common/card';
import { RoomForm } from './room-form';

export class Room extends Component {

    render() {
        const { roomId,
            title, available, selected,
            onSelectionChange,
            selectOccupant, occupants = {} } = this.props;
        return (<AppCard title={title} selected={selected} selectable={available} onSelectionChange={onSelectionChange} testId={roomId}>
            <RoomForm selected={selected} occupants={occupants[roomId]} selectOccupant={selectOccupant.bind(this, roomId)} />
        </AppCard>);
    }
}
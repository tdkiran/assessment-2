import React, { Component } from 'react';
import { AppCard } from '../common/card';
import { RoomForm } from './room-form';

export class Room extends Component {

    handleOccupantSelection = () => {
        this.props.selectOccupant(this.props.roomId)
    }

    render() {
        const { roomId, title, hideOption, selectRoom, selectOccupant,
            active, deSelectRoom, occupantInfo } = this.props;
        return (
            <AppCard
                roomId={roomId}
                title={title}
                hideOption={hideOption}
                active={active}
                selectRoom={selectRoom}
                deSelectRoom={deSelectRoom}
            >
                <RoomForm selectOccupant={selectOccupant} occupantInfo={occupantInfo} roomId={roomId} active={active} />
            </AppCard>);
    }
}
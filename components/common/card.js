import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
    border: 2px solid #ddd;
    border-radius: 5px;
    margin: 10px;

    ${props => props.disabled && css`
        background: #ccc;
        border-color: #ccc;
    `}
`;

const CardTitle = styled.div`
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    background: #ddd;

    ${props => props.disabled && css`
        background: #ccc;
    `}
`;

const CardContent = styled.div`
    padding: 10px;

    ${props => props.disabled && css`
        pointer-events: none;
    `}
`;


export class AppCard extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        const { roomId, deSelectRoom, selectRoom } = this.props;
        if (e.target.checked) {
            selectRoom(roomId);
        } else {
            deSelectRoom(roomId);
        };
    }

    render() {
        const { title, children, hideOption, active, roomId } = this.props;
        return (
            <Card disabled={!active} data-testid={`room-${roomId}`} >
                <CardTitle disabled={!active}>
                    {!hideOption &&
                        <input type="checkbox" checked={active}
                            onChange={this.handleChange} id={`check-room-${roomId}`}
                        />}
                    <label for={`check-room-${roomId}`}> {title} </label>
                </CardTitle>
                <CardContent disabled={!active}>
                    {children}
                </CardContent>
            </ Card>
        );
    }
}
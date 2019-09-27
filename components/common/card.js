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
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.selected !== nextProps.selected) {
            return {
                selected: nextProps.selected
            };
        }

        return null;
    }

    constructor() {
        super();
        this.state = {
            selected: false
        };
    }

    toggleSelection = () => {
        const { selected } = this.props;
        this.props.onSelectionChange(!selected);
    }

    render() {
        const { title, children, selectable, selected, testId } = this.props;
        const shouldDisable = selectable ? !this.state.selected : false;

        return (
            <Card disabled={shouldDisable} data-testid={`room-${testId}`} >
                <CardTitle disabled={shouldDisable}>
                    {selectable &&
                        <input type="checkbox" checked={selected} onChange={this.toggleSelection} />}
                    {title}
                </CardTitle>
                <CardContent disabled={shouldDisable}>
                    {children}
                </CardContent>
            </ Card>
        );
    }
}

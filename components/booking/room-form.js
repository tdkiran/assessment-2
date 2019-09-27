import React, { Component } from 'react';
import styled from 'styled-components';

const RoomFormContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FormItem = styled.div`
    padding: 10px;
`;

export class RoomForm extends Component {
    onChange(type, e) {
        const { selectOccupant } = this.props;

        selectOccupant(type, e.target.value);
    }
    render() {
        const { occupants = {}, selected } = this.props;

        return (<RoomFormContainer>
            <FormItem>
                <div>Adult <br />(18+)</div>
                <select
                    defaultValue={occupants.adult || ''}
                    onChange={this.onChange.bind(this, 'adult')}>
                    <option value="1">1</option>
                    {selected && (<option value="2">2</option>)}
                </select>
            </FormItem>
            <FormItem>
                <div>Children <br />(0-17)</div>
                <select
                    defaultValue={occupants.children || ''}
                    onChange={this.onChange.bind(this, 'children')}>
                    <option value="0">0</option>
                    {selected && (<>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </>)}
                </select>
            </FormItem>
        </RoomFormContainer>);
    }
}
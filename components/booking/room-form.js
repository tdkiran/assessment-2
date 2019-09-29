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
    handleOccupantSelection = (e) => {
        const { selectOccupant, occupantInfo, roomId } = this.props;
        const occupantSelectionInfo = e.target.dataset.type === 'adult' ? { adult: Number(e.target.value), children: occupantInfo.children } : { adult: occupantInfo.adult, children: Number(e.target.value) };
        debugger
        selectOccupant({ roomId, ...occupantSelectionInfo });
    }
    render() {
        const { occupantInfo: { adult, children } } = this.props;
        console.log(adult, children);
        return (<RoomFormContainer>
            <FormItem>
                <div>Adult <br />(18+)</div>
                <select
                    defaultValue={adult}
                    onChange={this.handleOccupantSelection}
                    data-type="adult"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>}
                </select>
            </FormItem>
            <FormItem>
                <div>Children <br />(0-17)</div>
                <select
                    defaultValue={children}
                    onChange={this.handleOccupantSelection}
                    data-type="children"
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    }
                </select>
            </FormItem>
        </RoomFormContainer>);
    }
}
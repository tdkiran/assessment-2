import React, { Component } from 'react';
import styled from 'styled-components';
import { listOfAdults, listOfChildrens } from '../../app_config';

const RoomFormContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FormItem = styled.div`
    padding: 10px;
`;

const occupantOptionsTemplate = count => (<option value={count} key={count}>{count}</option>);

export class RoomForm extends Component {

    handleOccupantSelection = (e) => {
        const { selectOccupant, occupantInfo, roomId } = this.props;
        const occupantSelectionInfo = e.target.dataset.type === 'adult' ? { adult: Number(e.target.value), children: occupantInfo.children } : { adult: occupantInfo.adult, children: Number(e.target.value) };
        selectOccupant({ roomId, ...occupantSelectionInfo });
    }

    render() {
        const { occupantInfo: { adult, children }, active } = this.props;
        return (
            <RoomFormContainer>
                <FormItem>
                    <div>Adult <br />(18+)</div>
                    <select
                        value={adult}
                        onChange={this.handleOccupantSelection}
                        data-type="adult"
                        disabled={!active}
                    >
                        {listOfAdults &&
                            listOfAdults.map(occupantOptionsTemplate)
                        }
                    </select>
                </FormItem>
                <FormItem>
                    <div>Children <br />(0-17)</div>
                    <select
                        value={children}
                        onChange={this.handleOccupantSelection}
                        data-type="children"
                        disabled={!active}
                    >
                        {listOfAdults &&
                            listOfChildrens.map(occupantOptionsTemplate)
                        }
                    </select>
                </FormItem>
            </RoomFormContainer>);
    }
}
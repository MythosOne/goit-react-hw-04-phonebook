import React from 'react';
import PropTypes from 'prop-types';
import { TitleFilter, ContainerFilter, Input } from './App.styled';

export default function Filter({ value, onChangeFilter }) {
        return (
            <ContainerFilter>
                <TitleFilter>Find contacts by name</TitleFilter>
                <Input
                    type='text'
                    name='filter'
                    value={value}
                    onChange={(event) => onChangeFilter(event.target.value)}
                    placeholder='Enter Name'
                />
            </ContainerFilter>
        )
    }

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}
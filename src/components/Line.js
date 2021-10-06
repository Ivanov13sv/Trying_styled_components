import React from 'react';
import styled from 'styled-components';

const Line = (props) => {
    return (
        <StyledLine {...props} />
    );
};

export default Line;

const StyledLine = styled.div`
font-size: 24px;
color: ${props => props.color || props.theme.colors.primary}
`
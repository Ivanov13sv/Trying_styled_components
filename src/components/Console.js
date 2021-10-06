import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

const Console = ({ color, ...props }) => {

    const [lines, setLines] = useState(['C/users/styled_components>']);

    const onKeyPress = e => {
        if (e.charCode === 13) {
            setLines([...lines, 'C/users/styled_components>'])
        }
    }

    const linesArr = lines.map(item => {
        return <Line color={color}>{item}</Line>
    })

    return (
        <Flex>
            <Flex direction='column' margin='0 10px'>
                {linesArr}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
        </Flex>
    );
};

export default Console;

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
}
@media ${props => props.theme.media.phone}{
    border: 2px solid red;
}
@media ${props => props.theme.media.tablet}{
    border: 2px solid green;
}
`
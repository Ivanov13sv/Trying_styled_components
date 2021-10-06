import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';
import Button from './components/Button';

function App() {
    return (
        <AppWrapper >
            <Flex justify='center'>
                <Title>Trying styled-components</Title>
            </Flex>
            <Flex direction= 'column' margin='20px 0 0 0'>
                <Console  />
                <Button outlined align='flex-end'> Отправить </Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;

`
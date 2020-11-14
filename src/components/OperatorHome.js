import React from 'react';
import styled from 'styled-components';

const OperatorHomeContainer = styled.nav`
    display: flex;
    flex-flow: column wrap;
    padding: 4%;
`;

const OperatorHome = () => {
    return(
        <OperatorHomeContainer>
            <h2>Operator Home</h2>
        </OperatorHomeContainer>
    )
}

export default OperatorHome;
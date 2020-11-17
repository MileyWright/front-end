import React from 'react';
import styled from 'styled-components';

const TruckCardContainer = styled.div`
    margin: 1% 0;
    padding: 1% 0;

    h2 {
        margin: 1% 0;
    }
    &:not(:last-child) {
        border-bottom: 2px dashed #FFBFB3
    };
`;

const TruckCard = (props) => {
    return(
        <TruckCardContainer>
            <h2>{props.name}</h2>
            <p>Cuisine: {props.type}</p>
            <p>Location: {props.location}</p>
            <p>Rating: {props.rating}</p>
        </TruckCardContainer>       
    );
};

export default TruckCard;
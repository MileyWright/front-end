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
            <div>
                <img src={props.imageOfTruck} alt={props.name} />
            </div>
            <p>Cuisine: {props.cuisineType}</p>
            <p>Location: {props.currentLocation}</p>
            <p>Rating: {props.customerRatingsAvg}</p>
        </TruckCardContainer>       
    );
};

export default TruckCard;
import React from 'react';
import styled from 'styled-components';

const TruckCardContainer = styled.div`
    margin: 1% 0;
    padding: 1% 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

    .image {
        width: 50%;
        margin: 2%;
        img {
            width: 40%;
        }
    }

    
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
           
            <div className="image">
            <h2>{props.name}</h2>
                <img src={props.imageOfTruck} alt={props.name} />
            </div>
            <div>
                <p>Cuisine: {props.cuisineType}</p>
                <p>Location: {props.currentLocation}</p>
                <p>Rating: {props.customerRatingsAvg}</p>
            </div>
        </TruckCardContainer>       
    );
};

export default TruckCard;
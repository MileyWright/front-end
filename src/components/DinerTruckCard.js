import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTruckInfo, addFavorites } from '../redux/actions';
import mapStateToProps from '../redux/state';
import styled from 'styled-components';

const TruckCardContainer = styled.div`
    margin: 1% 0;
    padding: 1% 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 2%;
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


const initialFormValues = {
    name: '',
    cuisineType: '',
    currentLocation: '',
}


const DinerTruckCard = (props) => {   

    const handleAdd = (e) => {
        const truckId = {
            truckId: props.id,
        };
        e.preventDefault();
        props.addFavorites(props.dinerId, truckId);
    }
  

    return(
        <TruckCardContainer>
            <div className="image" id={props.id}>
            <h2>{props.name}</h2>
                <img src={props.imageOfTruck} alt={props.name} />
            </div>
            <div>
                <p>Cuisine: {props.cuisineType}</p>
                <p>Location: {props.currentLocation}</p>
                <p>Rating: {props.customerRatingsAvg}</p>
                <p>Menu: {props.menu.map(item => <span>{item.itemName} {`$${item.itemPrice}`}</span> )}</p>
            </div>
            <button onClick={handleAdd}>Add To Favorites</button>            
        </TruckCardContainer>       
    );
};

export default connect(mapStateToProps, { getTruckInfo, addFavorites} )(DinerTruckCard);
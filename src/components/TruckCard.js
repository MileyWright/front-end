import React from 'react';
import { connect } from 'react-redux';
import { deleteTruck, getTruckInfo } from '../redux/actions';
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

const TruckCard = (props) => {   

    //delete handler
    const handleDelete = () => {
        props.deleteTruck(props.id);
        props.getTruckInfo();
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
                <p>Menu: {props.menu.map(item => <p>{item.itemName} {`$${item.itemPrice}`}</p> )}</p>
            </div>
            <button>Add Menu Items</button>            
            <button>Edit Truck Details</button> 
            <button onClick={handleDelete}>Delete Truck</button>
        </TruckCardContainer>       
    );
};

export default connect(mapStateToProps, { deleteTruck, getTruckInfo } )(TruckCard);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteTruck, getTruckInfo, updateTruck } from '../redux/actions';
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


const TruckCard = (props) => {   
    const [formValues, setFormValues] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        props.getTruckInfo();
    }, [props.addSuccess]);
    

    //change handler
    const handleChange = (e) => {
       setFormValues({
           ...formValues,
           [e.target.name]: e.target.value
       })
    }

     //edit state handler
     const handleEdit = () => {       
        setFormValues({
            ...formValues,
            name: props.name,
            cuisineType: props.cuisineType,
            currentLocation: props.currentLocation,            
        })
        setIsEditing(!isEditing);
    }

    //submit handler
    const handleUpdate = (e) => {
        e.preventDefault();      
        props.updateTruck(props.id, formValues);
        setIsEditing(!isEditing);
    }


    //delete handler
    const handleDelete = (e) => {
        e.preventDefault();    
        props.deleteTruck(props.id);
    }

    return(
        <TruckCardContainer>
           
            
            {isEditing 
                ? ( <form>
                        <label>Name
                            <input
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Cuisine Type
                            <input
                                type="text"
                                name="cuisineType"
                                value={formValues.cuisineType}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Current Location
                            <input
                                type="text"
                                name="currentLocation"
                                value={formValues.currentLocation}
                                onChange={handleChange}
                            />
                        </label>
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={handleEdit}>Cancel</button>
                    </form>
                    )
                : 
                    (
                    <>
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
                    <button>Add Menu Items</button>            
                    <button onClick={handleEdit}>Edit Truck Details</button> 
                    <button onClick={handleDelete}>Delete Truck</button>
                    </>
                    )
            }
            
        </TruckCardContainer>       
    );
};

export default connect(mapStateToProps, { deleteTruck, getTruckInfo, updateTruck } )(TruckCard);
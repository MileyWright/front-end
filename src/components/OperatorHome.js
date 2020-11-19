import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/state'
// import mockTruckData from './mockTruckData';
import TruckCard from './TruckCard';
import styled from 'styled-components';
import { getTruckInfo, addTruck, deleteTruck } from '../redux/actions';

const OperatorHomeContainer = styled.nav`
    display: flex;
    flex-flow: column nowrap;
    padding: 4% 2%;
    height: 100vh;
    h2 {
        margin-bottom: 1%;
    }
    h3{
        margin-bottom: 1%;
    }
`;

const MyTruckContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: space-between;
    background-color: #F9DB79;
    padding: 2%;
    width: 100%;
    img {
        width: 100%;
    }
`;


const TruckInfoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #F9DB79;
    padding: 2%;
    width: 100%;
    height: 20vh;   

    button {
        margin: 2% 0;
        width: 80%;
    }
`;


const FormContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 2% 1%;
    div {
        width: 100%;
    }
`;


const initialFormValues = {
    name: '',
    cuisineType: '',
    imageOfTruck: '',
};


const OperatorHome = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [isEditing, setIsEditing] = useState(false);

    //Get trucks on load
    useEffect(() => {
        props.getTruckInfo();
    }, []);


    //handlers
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const submitTruck = (e) => {
        e.preventDefault();

        const newTruck = {
            name: formValues.name,
            cuisineType: formValues.cuisineType, 
            imageOfTruck: formValues.imageOfTruck, 
            currentLocation: String(Math.random()),
            operatorId: props.operatorId,
        };

        console.log(newTruck);
        props.addTruck(newTruck);
        setFormValues(initialFormValues);
        props.getTruckInfo();
    }

    const toggleAddMenuItems = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    return(
        <OperatorHomeContainer>
            <h2>Truck Operations Center</h2>
            <FormContainer>
                {!isEditing 
                    ?
                    (<div>
                        <form onSubmit={submitTruck}>
                            <h2>Add a truck</h2>
                            <label>Truck Name
                                <input
                                    type="text"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Cuisine
                                <input
                                    type="text"
                                    name="cuisineType"
                                    value={formValues.cuisineType}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Truck Image
                                <input
                                    type="text"
                                    name="imageOfTruck"
                                    value={formValues.imageOfTruck}
                                    onChange={handleChange}
                                />
                            </label>
                            <button>Add Truck</button>
                        </form>
                    </div>)
                    :
                    (<div>
                        <form>
                        <h2>Add menu items</h2>                    
                            <label>Name
                                <input
                                    type="text"
                                    name="menu"
                                    value=''
                                    onChange=''
                                />
                            </label>
                            <label>Description
                                <input
                                    type="text"
                                    name="menu"
                                    value=''
                                    onChange=''
                                />
                            </label>
                            <label>Photo
                                <input
                                    type="text"
                                    name="menu"
                                    value=''
                                    onChange=''
                                />
                            </label>
                            <label>Price
                                <input
                                    type="text"
                                    name="menu"
                                    value=''
                                    onChange=''
                                />
                            </label>
                            <button>Add Menu Item</button><button onClick={toggleAddMenuItems}>Cancel</button>
                        </form>
                    </div>)
                }
            </FormContainer>
            <div>             
                <h3>My Trucks</h3>                 
                <MyTruckContainer>
                    {props.data.length > 0 
                        ? (props.data.map(truck => {
                            return <TruckCard key={truck.id} deleteTruck={deleteTruck} {...truck} />
                        }))
                        : null }
                </MyTruckContainer>
            </div>
        </OperatorHomeContainer>
    )
}

export default connect(mapStateToProps, { getTruckInfo, addTruck, deleteTruck })(OperatorHome);
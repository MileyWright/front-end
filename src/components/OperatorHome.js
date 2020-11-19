import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/state'
// import mockTruckData from './mockTruckData';
import TruckCard from './TruckCard';
import styled from 'styled-components';
import { getInfo } from '../redux/actions';

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
    div {
        width: 10%;
        &:hover {
            width:11%;
            transition: all 0.25s ease-in-out;
        }
    }
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


const OperatorHome = (props) => {
    const [formvalues, setFormValues] = useState();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        props.getInfo();
    }, []);

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
                        <form>
                            <h2>Add a truck</h2>
                            <label>Truck Name
                                <input
                                    type="text"
                                    name="truck_name"
                                    value=''
                                    onChange=''
                                />
                            </label>
                            <label>Cuisine
                                <input
                                    type="text"
                                    name="truck_name"
                                    value=''
                                    onChange=''
                                />
                            </label>
                            <label>Avatar URL
                                <input
                                    type="text"
                                    name="truck_url"
                                    value=''
                                    onChange=''
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
                    {props.data
                        && props.data.map(truck => {
                            return <TruckCard key={truck.id} {...truck} />
                        })}
                </MyTruckContainer>
                <TruckInfoContainer>
                    {/* <div>
                        {truckInfo && 
                            <div>
                                <h2>{truckInfo[0].name}</h2>
                                <p>Cuisine: {truckInfo[0].type}</p>
                                <p>Location: {truckInfo[0].location}</p>
                                <p>Rating: {truckInfo[0].rating}</p>
                                <button onClick={toggleAddMenuItems}>Add Menu Items</button>
                            </div>                   
                        }
                    </div>
                    <div>
                        Menu items will go here...
                    </div>                   */}
                </TruckInfoContainer>
            </div>
            
        </OperatorHomeContainer>
    )
}

export default connect(mapStateToProps, { getInfo })(OperatorHome);
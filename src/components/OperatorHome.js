import React, { useState } from 'react';
import mockTruckData from './mockTruckData';
import styled from 'styled-components';

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
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    background-color: #F9DB79;
    padding: 2%;
    width: 100%;
    height: 20vh;
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


const OperatorHome = () => {
    const [truckInfo, setTruckInfo] = useState();
    const [formvalues, setFormValues] = useState();
    const [isEditing, setIsEditing] = useState(false);

    //
    const getTruckInfo = (e) => {
        console.log(e.target.id);
        const info = mockTruckData.filter(truck => truck.id === Number(e.target.id));
        console.log(info)
        setTruckInfo(info);
    }

    const toggleAddMenuItems = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    return(
        <OperatorHomeContainer>
            <h2>Truck Operations Center</h2>
            
            <div>             
                <h3>My Trucks</h3>                 
                <MyTruckContainer>
                    {mockTruckData
                        && mockTruckData.map(truck => {
                            return <div key={truck.id} id={truck.id} onClick={getTruckInfo} ><img src={truck.image} id={truck.id}></img></div>
                        })}
                </MyTruckContainer>
                <TruckInfoContainer>
                    <div>
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
                    </div>                  
                </TruckInfoContainer>
            </div>
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
        </OperatorHomeContainer>
    )
}

export default OperatorHome;
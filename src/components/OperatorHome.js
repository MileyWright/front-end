import React, { useState } from 'react';
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
    background-color: #F9DB79;
    padding: 2%;
    width: 100%;
    height: 20vh;   
`;


const FormContainer = styled.div`
    padding: 2% 1%;
`;

const mockTruckData = [
    {
        id: 1,
        name: 'Truck 1',
        type: 'Delicious Cuisine',
        image: './food1.jpg',
        location: 'location',
        rating: 5,
    },
    {
        id: 2,
        name: 'Truck 2',
        type: 'Cuisine',
        image: './food2.jpg',
        location: 'location',
        rating: 2,
    },
    {
        id: 3,
        name: 'Truck 3',
        type: 'Cuisine',
        image: './food2.jpg',
        location: 'location',
        rating: 2,
    },
    {
        id: 4,
        name: 'Test Truck 4',
        type: 'Cuisine',
        image: './food2.jpg',
        location: 'location',
        rating: 2,
    },
    {
        id: 5,
        name: 'Test Truck 5',
        type: 'Delicious Cuisine',
        image: './food1.jpg',
        location: 'location',
        rating: 5,
    },
    {
        id: 6,
        name: 'Test Truck 6',
        type: 'Cuisine',
        image: './food2.jpg',
        location: 'location',
        rating: 2,
    },
    {
        id: 7,
        name: 'Test Truck 7',
        type: 'Cuisine',
        image: './food2.jpg',
        location: 'location',
        rating: 2,
    },
    {
        id: 8,
        name: 'Test Truck 8',
        type: 'Cuisine',
        image: './food2.jpg',
        location: 'location',
        rating: 2,
    },
]

const OperatorHome = () => {
    const [truckInfo, setTruckInfo] = useState();

    //
    const getTruckInfo = (e) => {
        console.log(e.target.id);
        const info = mockTruckData.filter(truck => truck.id === Number(e.target.id));
        console.log(info)
        setTruckInfo(info);
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
                   {truckInfo && 
                   <div>
                       <h2>{truckInfo[0].name}</h2>
                       <p>Cuisine: {truckInfo[0].type}</p>
                       <p>Location: {truckInfo[0].location}</p>
                       <p>Rating: {truckInfo[0].rating}</p>
                    </div>                   
                   }
                </TruckInfoContainer>
            </div>
            <FormContainer>
                <form>
                    <h3>Add a truck</h3>
                    <label>Truck Name
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
                    <label>Menu Items
                        <input
                            type="text"
                            name="menu"
                            value=''
                            onChange=''
                        />
                    </label>
                    <button>Add Truck</button>
                </form>
            </FormContainer>
        </OperatorHomeContainer>
    )
}

export default OperatorHome;
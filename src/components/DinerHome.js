import React from 'react';
import styled from 'styled-components';

const DinerHomeContainer = styled.nav`
    display: flex;
    flex-flow: column nowrap;
    padding: 4% 2%;
    height: 100vh;
`;

const MyTruckContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #F9DB79;
    padding: 2%;
    margin: 2% 0;
    width: 100%;
`;

const FormContainer = styled.div`
    padding: 2% 1%;
    input {
        margin: 1% 0;
    }
`;

const DinerHome = () => {
    return(
        <DinerHomeContainer>
            <h2>Find Food Trucks Near You</h2>          
            <FormContainer>
                <form>
                    <label>Search by Name or Type of Food
                        <input
                            type="text"
                            name="truck_name"
                            value=''
                            onChange=''
                        />
                    </label>
                    <label>Distance
                        <input
                            type="text"
                            name="truck_url"
                            value=''
                            onChange=''
                        />
                    </label>
                    <button>Search</button>
                </form>
            </FormContainer>
            <MyTruckContainer>
                <div>
                    <h3>Results</h3>
                    Display of added trucks goes here...
                </div>
                <div>
                    Truck info (name, menu, location, etc. goes here...)
                </div>
            </MyTruckContainer>
        </DinerHomeContainer>
    )
}

export default DinerHome;
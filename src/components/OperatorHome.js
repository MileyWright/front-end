import React from 'react';
import styled from 'styled-components';

const OperatorHomeContainer = styled.nav`
    display: flex;
    flex-flow: column wrap;
    padding: 4% 2%;
    height: 100vh;
`;

const MyTruckContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #F9DB79;
    padding: 2%;
    width: 100%;
`;

const FormContainer = styled.div`
    padding: 2% 1%;
`;

const OperatorHome = () => {
    return(
        <OperatorHomeContainer>
            <h2>Truck Operations Center</h2>
            <MyTruckContainer>
                <div>
                    <h3>My Trucks</h3>
                    Display of added trucks goes here...
                </div>
                <div>
                    Truck info (name, menu, location, etc. goes here...)
                </div>
            </MyTruckContainer>
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
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #B5E8D5;
    padding: 4%;
    margin-bottom: 4%;
`;

const Nav = () => {
    return(
        <NavContainer>
            <div>
                <h1>Food Truck TrackR</h1>
            </div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/signup'>SignUp</Link>
            </div>
            <div>
                <Link to='/signin'>SignIn</Link>
            </div>
        </NavContainer>
    )
}

export default Nav;
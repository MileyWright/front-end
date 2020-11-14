import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.nav`
    display: flex;
    flex-flow: column wrap;
    padding: 4%;
`;

const Home = () => {
    return(
        <HomeContainer>
            <h2>Homepage</h2>
            <section>
                Here is some info
            </section>
            <section>
                Here is some info
            </section>
            <section>
                Here is some info
            </section>
        </HomeContainer>
    )
}

export default Home;
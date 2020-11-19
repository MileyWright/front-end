import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTruckInfo } from '../redux/actions'
import mapStateToProps from '../redux/state'
import DinerTruckCard from './DinerTruckCard'
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
    div {
        width: 100%;
    }
`;

const FormContainer = styled.div`
    padding: 2% 1%;
    input {
        margin: 1% 0;
    }
`;

const DinerHome = (props) => {
    const [search, setSearch] = useState({ search: '', radius: null});

    //Get trucks on load
    useEffect(() => {
        props.getTruckInfo();
    }, []);

    //handlers
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    return(
        <DinerHomeContainer>
            <h2>Find Food Trucks Near You</h2>          
            <FormContainer>
                <form>
                    <label>Search by Name or Type of Food
                        <input
                            type="text"
                            name="search"
                            value={search.search}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Find food within (mi)
                        <select name="radius"onChange={handleChange}>
                            <option value="1">1 mi</option>
                            <option value="2">2 mi</option>
                            <option value="3">3 mi</option>
                            <option value="4">4 mi</option>
                            <option value="5">5 mi</option>
                        </select>
                    </label>
                </form>
            </FormContainer>
            <MyTruckContainer>
                <div>
                    <h2>Results</h2>
                    { /*Filters and maps through results. If 0 results display error message */
                    props.data.filter(item => item.name.toLowerCase().includes(search.search) || item.cuisineType.toLowerCase().includes(search.search)).length > 0 
                      ? props.data.filter(item => item.name.toLowerCase().includes(search.search) || item.cuisineType.toLowerCase().includes(search.search))
                          .map(item => <DinerTruckCard key={item.id} {...item}/>)
                      : 'Sorry we couldn\t find any trucks nearby. Please try a different search term...'
                     }
                </div>
            </MyTruckContainer>
        </DinerHomeContainer>
    )
}

export default connect(mapStateToProps, { getTruckInfo })(DinerHome);
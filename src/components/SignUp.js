import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions'
import mapStateToProps from '../redux/state';
import styled from 'styled-components';

const SignUpContainer = styled.nav`
    padding: 4%;
`;

const initialSignupInfo = {
    username: '',
    email: '',
    password: ''
};


const SignUp = (props) => {
    //state
    const [signupInfo, setSignupInfo] = useState(initialSignupInfo);

    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp();
    };

    const handleChange = (e) => {
       setSignupInfo({
           ...signupInfo,
           [e.target.name]: e.target.value,
       });
    };

    return(
        <SignUpContainer>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <label>Username&nbsp;
                    <input
                        type="text"
                        name="username"
                        value={signupInfo.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Email&nbsp;
                    <input
                        type="email"
                        name="email"
                        value={signupInfo.email}
                        onChange={handleChange}
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        type="password"
                        name="password"
                        value={signupInfo.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign Up</button>
            </form>
        </SignUpContainer>
    )
}

export default connect(mapStateToProps, { signUp })(SignUp);
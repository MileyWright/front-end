import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../redux/actions';
import mapStateToProps from '../redux/state';
import styled from 'styled-components';

const SignInContainer = styled.nav`
    padding: 4%;

    .checkboxes {
        display: flex;
        justify-content: flex-start;
        
        div {
            margin-right: 6%;
            margin-bottom: 2%;    
        }
    }
`;

const initialSignInInfo = {
    username: '',
    password: ''
}

const SignIn = (props) => {
    //state
    const [signInInfo, setSignInInfo] = useState(initialSignInInfo);
    const [role, setRole] = useState('');

    //history hook
    const history = useHistory();

    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        props.logIn(signInInfo);
        if (props.isLoggedIn && role === 'diner') {
            history.push('/diner')
        } else if (props.isLoggedIn && role === 'operator') {
            history.push('/operator')
        };
    };

    const handleChange = (e) => {
        setSignInInfo({
            ...signInInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleRole = (e) => {
        setRole(e.target.value);
    };

    return(
        <SignInContainer>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label>Username&nbsp;
                    <input
                        type="text"
                        name="username"
                        value={signInInfo.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        type="password"
                        name="password"
                        value={signInInfo.password}
                        onChange={handleChange}
                    />
                </label>
                <div className="checkboxes">
                    <div>
                    <label>Diner
                        <input
                            type="radio"
                            name="role"
                            value="diner"
                            onChange={handleRole}
                        />
                    </label>
                    </div>
                    <div>
                        <label>Operator
                            <input
                                type="radio"
                                name="role"
                                value="operator"
                                onChange={handleRole}
                            />
                        </label>
                    </div>
                </div>
                <button>Sign In</button>
            </form>
            <div>{String(props.error)}</div>
        </SignInContainer>
    )
}

export default connect(mapStateToProps, { logIn })(SignIn);
import React from 'react';
import styled from 'styled-components';

const SignInContainer = styled.nav`
    padding: 4%;
`;

const SignIn = () => {
    return(
        <SignInContainer>
            <h2>SignIn</h2>
            <form onSubmit=''>
                <label>Username&nbsp;
                    <input
                        type="text"
                        name="username"
                        value=""
                        onChange=""
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        type="password"
                        name="password"
                        value=""
                        onChange=""
                    />
                </label>
                <button>Sign In</button>
            </form>
        </SignInContainer>
    )
}

export default SignIn;
import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.nav`
    padding: 4%;
`;

const SignUp = () => {
    return(
        <SignUpContainer>
            <h2>SignUp</h2>
            <form onSubmit=''>
                <label>Username&nbsp;
                    <input
                        type="text"
                        name="username"
                        value=""
                        onChange=""
                    />
                </label>
                <label>Email&nbsp;
                    <input
                        type="email"
                        name="email"
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
                <button>Sign Up</button>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;
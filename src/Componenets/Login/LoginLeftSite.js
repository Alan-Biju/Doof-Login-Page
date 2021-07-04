import React from 'react';
import styled from 'styled-components';

const LoginLeftSite = () => {
	return (
		<>
			<StyledContainer>
				<Form>
					<FormTitle>Login</FormTitle>
					<InputContainer>
						<InputBox>
							<label htmlFor='Email'>
								<p>Email</p>
							</label>
							<input
								type='email'
								name='Email'
								id='Email'
								placeholder=' Your Email'
								required
							/>
						</InputBox>
						<InputBox>
							<label htmlFor='password'>
								<p>Password</p>
							</label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Your Password'
                                required
                                autoComplete='true'
							/>
							<h3>forget password?</h3>
						</InputBox>
					</InputContainer>
					<Button type='submit'>Edit</Button>
					<Text>
						Don’t have an account yet? <span>Signup</span>
					</Text>
				</Form>
			</StyledContainer>
		</>
	);
};

export default LoginLeftSite;
const StyledContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
`;

const Form = styled.form`
	width: 100%;
	max-width: 540px;
	min-width: 320px;
	min-height: 400px;
	margin-left: 50px;
	padding-top: 20px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	@media (max-width: 700px) {
		margin-left: 5px;
	}
`;
const FormTitle = styled.h2`
	font-size: 1.2rem;
	color: #333333;
`;
const InputContainer = styled.div``;
const InputBox = styled.div`
	width: 100%;
	max-width: 350px;
	min-width: 230px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	h3 {
		font-size: 0.7rem;
		color: #4b4848;
		padding: 5px;
		width: 100%;
		text-align: right;
		font-weight: 600;
        cursor: pointer;
	}
	label {
		text-align: right;
		p {
			font-size: 0.7rem;
			font-weight: 600;
			padding: 5px 0 5px 0;
			color: #a5a5a5;
		}
	}
	input {
		width: 100%;
		padding: 8px;
		font-size: 17px;
		border: none;
		outline: none;
		text-transform: capitalize;
		border-radius: 5px;
		background-color: #f0f0f0;
		&::placeholder {
			font-size: 0.7rem;
			letter-spacing: 1px;
			@media (max-width: 300px) {
				font-size: 0.6rem;
			}
		}
	}
	@media (max-width: 550px) {
		width: 100%;
	}
`;
const Button = styled.button`
	border: none;
	outline: none;
	width: 100%;
	max-width: 350px;
	min-width: 230px;
	height: 30px;
	color: #333333;
	text-align: center;
	padding: 6px 10px;
	font-size: 0.7rem;
	letter-spacing: 1px;
	background: #f7d832;
	cursor: pointer;
	transition-duration: 0.5s;
	border-radius: 3px;
	font-weight: 600;
	&:hover {
		background: #ffe657;
	}
`;
const Text = styled.p`
	color: #333333;
	font-weight: 600;
	font-size: 0.8rem;
    cursor: pointer;
	span {
		color: #000000;
		font-weight: 900;
	}
`;

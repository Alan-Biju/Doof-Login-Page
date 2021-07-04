import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
	return (
		<NavContainer>
			<Logo>DOOF</Logo>
			<Button>Test</Button>
		</NavContainer>
	);
};

export default NavBar;
const NavContainer = styled.header`
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 50px;
	@media (max-width: 700px) {
		padding: 0 20px;
	}
`;
const Logo = styled.h1`
	font-family: Montserrat;
	font-size: 2rem;
	font-weight: 700;
	color: #f7d832;
`;
const Button = styled.button`
	width: 120px;
	height: 32px;
	background: #f7d832;
	border-radius: 5px;
	border: none;
	outline: none;
	font-size: 0.7rem;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		background: #f7da32cc;
	}
`;

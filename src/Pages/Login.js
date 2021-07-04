import React from 'react';
import styled from 'styled-components';
import LoginLeftSite from '../Componenets/Login/LoginLeftSite';
import LoginRightSide from '../Componenets/Login/LoginRightSide';
import LeftBlob from '../Componenets/Static/LeftBlob';

const Login = () => {
	return (
		<StyledMainContainer>
			<LoginLeftSite />
			<LoginRightSide />
			<LeftBlob/>
		</StyledMainContainer>
	);
};

export default Login;
const StyledMainContainer = styled.div`
	width: 100vw;
	height: 100%;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow-x: hidden;
    @media(max-width:700px){
        flex-direction: column;
    }
`;

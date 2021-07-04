import React from 'react'
import styled from 'styled-components';

const LoginRightSide = () => {
    return (
			<StyledContainer>
				<TextBox>
					<h2>Unlock your stuck revenue.</h2>
					<p>
						We help you unlock the true potential connect with your customers to
						understand the rights and wrongs with your product.
					</p>
            </TextBox>
            <img src="/image/pic.svg" alt="pic"  />
			</StyledContainer>
		);
}

export default LoginRightSide
const StyledContainer = styled.div`
	overflow-x: hidden;
	background-color: transparent;
	width: 100%;
	max-width: 500px;
	min-width: 280px;
	color: #333333;
	text-align: right;
	padding-right: 50px;
	display: flex;
	align-items: center;
	flex-direction: column;
	img {
		margin-top: 20px;
		width: 320px;
		object-fit: contain;
	}
	@media (max-width: 700px) {
		text-align: center;
		padding: 5px;
	}
`;
const TextBox = styled.div`
width: 100%;
h2{
    padding: 20px 0;
    font-weight: 600;
}
p{
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
}


`;
import React from 'react';
import styled from 'styled-components';

const LeftBlob = () => {
	return <Blob></Blob>;
};

export default LeftBlob;
const Blob = styled.div`
	width: 720px;
	height: 720px;
	background: #ffe999;
	border-radius: 50%;
	position: fixed;
	right:-114px;
	top: -154px;
    z-index: -1;
    overflow-x: hidden;
`;

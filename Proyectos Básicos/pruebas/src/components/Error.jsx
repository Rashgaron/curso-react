import React from 'react';
import styled from '@emotion/styled'

const ErrorMsg = styled.p`
	text-align: center;
	background-color: #f3252578;
	border-radius: 10px;
	height: 50px;
	line-height: 50px;
	font-weight: bold;
	font-size: 18px;
	color: #a90e0e;
`;
const Error = ({mensaje}) => {
return (<ErrorMsg>{mensaje}</ErrorMsg>  );
}
 
export default Error;
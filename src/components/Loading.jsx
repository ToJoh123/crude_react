import styled from 'styled-components';

export const Loading = styled.div`
	background-image: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 800px;
	height: 800px;
`;

import styled from 'styled-components';

const StyledApp = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	background: rgb(2, 0, 36);
	background: hsl(0, 0%, 0%, 0.85);
	overflow: auto;
`;

const Header = styled.header`
	width: 100%;
`;

const GameWindowContainer = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	margin: 1rem auto 0;
	flex: 1;
`;

export { StyledApp, Header, GameWindowContainer };

import styled from 'styled-components';

const FooterComponent = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  font-family:"monospace" ,"Big Shoulders Text", cursive;
  background: #333;
  height: 4rem;
  justify-content: center;
  text-align: center;
  & > :first-child {
    margin-left: auto;
    padding-right: 1rem;
  }
  & > :last-child {
    margin-right: auto;
    padding-left: 1rem;
  }
`;

const FooterText = styled.p`
	color: #fff;
	margin: auto 0;
	& > a {
		transition: 0.5s;
	}
	& > a:link,
	& > a:active,
	& > a:visited {
		color: #fff;
	}
	& > a:hover {
		color: #333;
		transition: 0.5s;
	}
`;

const FooterLinksDiv = styled.div`
	display: flex;
	& > * {
		margin: auto;
	}
`;

export { FooterComponent, FooterText, FooterLinksDiv };

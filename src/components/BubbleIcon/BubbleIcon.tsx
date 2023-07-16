import styled from 'styled-components';

export default function BubbleIcon(props: any) {
	return <Container onClick={props.onClickCB}>{props.children}</Container>;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(2px);
	border-radius: 50%;
	cursor: pointer;
	transition: background 0.2s ease-in-out;

	&:hover {
		background: rgba(255, 255, 255, 0.4);
	}
`;

import styled from 'styled-components';

export default function BubbleIcon(props: any) {
	return (
		<Container active={props.active} onClick={props.onClickCB}>
			{props.children}
		</Container>
	);
}

const Container = styled.div<any>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background: ${(props) =>
		props.active ? `rgba(255, 255, 255, 0.4)` : `rgba(255, 255, 255, 0.2)`};
	backdrop-filter: blur(2px);
	border-radius: 50%;
	cursor: pointer;
	transition: background 0.2s ease-in-out;
	${(props) =>
		props.active
			? `border: 1.5px solid rgba(255, 255, 255, 0.6)`
			: `border:none`};

	&:hover {
		background: rgba(255, 255, 255, 0.4);
	}
`;

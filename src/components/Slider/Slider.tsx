import styled from 'styled-components';
import useTime from '../../store/store';
import { useEffect, useRef } from 'react';

export default function Slider() {
	const { startTime, currentTime } = useTime();
	const firstRender = useRef(true);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
		} else {
			startTime();
		}
	}, []);

	return (
		<Container>
			<Background>
				<BackgroundProgress progress={currentTime} />
			</Background>
			{currentTime}

			<SVG
				width='560'
				viewBox='0 0 560 29'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<rect x='426' y='12' width='122' height='6' fill='white' />
				<rect x='416' y='6' width='6' height='18' fill='white' />
				<rect x='11' y='12' width='126' height='6' fill='white' />
				<rect x='143' y='6' width='6' height='18' fill='white' />
				<rect x='154' y='12' width='118' height='6' fill='white' />
				<rect x='290' y='12' width='120' height='6' fill='white' />
				<rect width='6' height='29' fill='white' />
				<rect x='277' width='6' height='29' fill='white' />
				<rect x='554' y='3' width='6' height='26' fill='white' />
			</SVG>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	position: relative;
	width: 500px;
`;

const Background = styled.div<any>`
	display: flex;
	position: absolute;
	//width: 100%;
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	background: #ffffff7f;
	mask-image: url(mask.svg);
	-webkit-mask-image: url(mask.svg);
	mask-size: cover;
	-webkit-mask-size: cover;
`;

const BackgroundProgress = styled.div<any>`
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(86deg, #bbbbbb 0%, #ffffff 100%);
	top: 0;
	left: ${(props) => props.progress - 100}%;

	transition: left 0.5s ease-in-out;
`;

const ClipPath = styled.div`
	position: relative;
	width: 100px;
	height: 50px;
	background: red;
`;

const SVG = styled.svg`
	position: relative;
	width: 100%;
	visibility: hidden;
`;

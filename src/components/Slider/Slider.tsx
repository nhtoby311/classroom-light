import styled from 'styled-components';
import useStore from '../../store/store';
import { useEffect, useRef, useCallback, useState } from 'react';
import { useTimer } from 'react-use-precision-timer';

const DelayTime = 1000;

export default function Slider() {
	const { setCurrentTime, currentTime, incrementTime, isPaused } = useStore();

	const [isDragging, setIsDragging] = useState(false);
	const [rangeVal, setRangeVal] = useState(currentTime);

	const callback = useCallback(() => {
		if (!isPaused) {
			incrementTime();
		}
	}, [isPaused]);
	// The callback will be called every 1000 milliseconds.
	const timer = useTimer({ delay: DelayTime }, callback);

	useEffect(() => {
		timer.start();
	}, []);

	useEffect(() => {
		if (!isDragging) {
			setRangeVal(currentTime);
		}
	}, [currentTime]);

	const handleRangeChange = (event: any) => {
		if (!isDragging) {
			setIsDragging(true);
		}
		setRangeVal(parseInt(event.target.value));
	};

	const handleRangeRelease = () => {
		setIsDragging(false);
		setCurrentTime(rangeVal);
	};

	return (
		<Container>
			<Background>
				<BackgroundProgress progress={currentTime} />
			</Background>

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

			<Input
				type='range'
				min='0'
				max='100'
				value={isDragging ? rangeVal : currentTime}
				onChange={handleRangeChange}
				onPointerUp={handleRangeRelease}
				onPointerDown={() => setIsDragging(true)}
			/>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	position: relative;
	min-width: 500px;
	align-items: center;

	@media (max-width: 700px) {
		min-width: auto;
		width: 100%;
	}
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
	left: ${(props) =>
		props.progress === 100 ? 0 : (props.progress % 100) - 100}%;

	/* transition: left ${DelayTime / 1000}s ease-in; */
`;

const ClipPath = styled.div`
	position: relative;
	width: 100px;
	height: 50px;
	background: red;
`;

const SVG = styled.svg`
	position: relative;
	visibility: hidden;
	width: 100%;
`;

const Input = styled.input`
	position: absolute;
	width: 100%;
	-webkit-appearance: none;
	appearance: none;
	background: transparent;
	cursor: pointer;

	&::-webkit-slider-runnable-track {
		background: transparent;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		/* Centers thumb on the track */
		background-color: #ffffff;
		height: 16px;
		width: 16px;
		//transform: translateY(-50%);
		border-radius: 50%;

		&:hover {
			transform: scale(1.2);
		}
	}
`;

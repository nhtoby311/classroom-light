import styled from 'styled-components';
import Slider from '../Slider/Slider';
import BubbleIcon from '../BubbleIcon/BubbleIcon';
import RefreshArrowSVG from '../SVG/RefreshArrowSVG';
import FastForwardSVG from '../SVG/FastForwardSVG';
import useTime from '../../store/store';
import PlaySVG from '../SVG/PlaySVG';
import PauseSVG from '../SVG/PauseSVG';
import SlowBackSVG from '../SVG/SlowBackSVG';

export default function Contents() {
	const resetTime = useTime((state) => state.resetTime);
	const pauseTime = useTime((state) => state.setIsPaused);
	const isPaused = useTime((state) => state.isPaused);
	const setFactor = useTime((state) => state.setFactor);
	const factor = useTime((state) => state.factor);
	const currentTime = useTime((state) => state.currentTime);

	return (
		<Wrapper>
			<Container>
				<Hero>
					<Top />

					<Bottom>
						<div></div>
						<SliderCont>
							<h3>TIME</h3>
							<Slider />
							<SliderInfo>
								<BubbleIcon onClickCB={resetTime}>
									<RefreshArrowSVG />
								</BubbleIcon>
								<BubbleIcon
									onClickCB={() => pauseTime(!isPaused)}>
									{isPaused ? <PlaySVG /> : <PauseSVG />}
								</BubbleIcon>
								<h2>{currentTime}:00</h2>
								<ControlsCont>
									<BubbleIcon
										onClickCB={() => {
											if (factor > 1)
												setFactor(factor / 2);
										}}>
										<SlowBackSVG />
									</BubbleIcon>
									{factor}x
									<BubbleIcon
										onClickCB={() => {
											if (factor < 10)
												setFactor(factor * 2);
										}}>
										<FastForwardSVG />
									</BubbleIcon>
								</ControlsCont>
							</SliderInfo>
						</SliderCont>

						<div></div>
					</Bottom>
				</Hero>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	pointer-events: none;
`;

const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 95%;
	max-width: 1920px;
	min-height: 100%;
	pointer-events: none;
	color: white;
`;

const Hero = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100vh;
`;

const Top = styled.div`
	display: flex;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 30px 50px;
	width: 100%;
`;

const SliderCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	pointer-events: all;
	h3 {
		font-size: 28px;
		font-weight: 500;
	}
`;

const SliderInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	h2 {
		font-size: 81px;
		font-weight: 700;
		width: 250px;
		text-align: center;
	}
`;

const ControlsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
`;

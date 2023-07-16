import styled from 'styled-components';
import Slider from '../Slider/Slider';
import BubbleIcon from '../BubbleIcon/BubbleIcon';
import RefreshArrowSVG from '../SVG/RefreshArrowSVG';
import FastForwardSVG from '../SVG/FastForwardSVG';

export default function Contents() {
	return (
		<Container>
			<Hero>
				<Top />

				<Bottom>
					<h1>Contents</h1>
					<SliderCont>
						<h3>TIME</h3>
						<Slider />
						<SliderInfo>
							<BubbleIcon>
								<RefreshArrowSVG />
							</BubbleIcon>
							<h2>12:00</h2>
							<BubbleIcon>
								<FastForwardSVG />
							</BubbleIcon>
						</SliderInfo>
					</SliderCont>

					<div></div>
				</Bottom>
			</Hero>
		</Container>
	);
}

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
	}
`;

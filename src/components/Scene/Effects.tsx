import {
	EffectComposer,
	Bloom,
	N8AO,
	Autofocus,
	TiltShift2,
} from '@react-three/postprocessing';

export default function Effects() {
	return (
		<EffectComposer>
			{/* <Bloom luminanceThreshold={0.7} />
			<TiltShift2 /> */}
			<N8AO />
		</EffectComposer>
	);
}

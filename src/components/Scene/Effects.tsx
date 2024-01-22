import { useThree } from '@react-three/fiber';
import {
	EffectComposer,
	Bloom,
	N8AO,
	Autofocus,
	TiltShift2,
} from '@react-three/postprocessing';
import { useEffect, useMemo } from 'react';
import { Color, Object3D, PCFSoftShadowMap } from 'three';

import { GodraysPass } from 'three-good-godrays';
import useStore from '../../store/store';

export default function Effects() {
	const lightRef = useStore((state) => state.lightRef);

	return (
		<EffectComposer>
			{/* <Bloom luminanceThreshold={0.7} />
			<TiltShift2 /> */}
			{/* <N8AO /> */}

			{/* <Bloom luminanceThreshold={0.9} /> */}

			<GoodGodRays lightRef={lightRef} />
		</EffectComposer>
	);
}

const GoodGodRays = ({ lightRef }: any) => {
	const { camera, gl, scene } = useThree();

	//const [pass, setPass] = useState(()=>new GodraysPass(pointLight, camera));
	useEffect(() => {
		gl.shadowMap.enabled = true;
		gl.shadowMap.type = PCFSoftShadowMap;
		gl.shadowMap.autoUpdate = true;
	}, []);

	const pass = useMemo(() => {
		if (!lightRef) return new Object3D();
		const godraysPass = new GodraysPass(lightRef, camera);

		godraysPass.setParams({
			density: 0.006,
			maxDensity: 0.67,
			distanceAttenuation: 5,
			color: new Color(0xff0000).getHex(),
			edgeStrength: 2,
			edgeRadius: 2,
			raymarchSteps: 60,
			enableBlur: true,
			blurVariance: 0.1,
			gammaCorrection: true,
		});

		godraysPass.renderToScreen = true;
		return godraysPass;
	}, [lightRef]);

	console.log('pass', pass);
	return <primitive object={pass} />;
};

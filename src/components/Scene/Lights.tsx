import { useRef, useState } from 'react';
import useTime from '../../store/store';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { PerformanceMonitor, SoftShadows } from '@react-three/drei';

export default function Lights() {
	const currentTime = useTime((state) => state.currentTime);

	const lookAtRef = useRef<any>();

	const lightRef = useRef<any>();
	const lightRef2 = useRef<any>();

	const ZLightPosition = Math.sin(currentTime * 0.02 * Math.PI) * 25;
	const XLightPosition = Math.cos(currentTime * 0.02 * Math.PI) * 25;

	const [isLow, setIsLow] = useState(false);

	const vec2 = new THREE.Vector3();
	useFrame((_, delta) => {
		//lightRef.current.position.lerp(vec2, 0.005);

		vec2.set(XLightPosition, lightRef.current.position.y, ZLightPosition);
		easing.damp3(lightRef.current.position, vec2, 1.5, delta);
		if (!isLow) easing.damp3(lightRef2.current.position, vec2, 1.5, delta);
	});

	// useHelper(rectLightRef, RectAreaLightHelper, 'cyan');

	return (
		<>
			<ambientLight color={'#72643d'} intensity={0.6} />
			<directionalLight
				intensity={2.5}
				color={'#f7b03e'}
				ref={lightRef}
				position={[14.1, 6.6, -3.4]}
				castShadow
				shadow-mapSize={2048}
				target={lookAtRef.current}
				shadow-bias={-0.001}>
				<orthographicCamera
					attach='shadow-camera'
					args={[-8.5, 8.5, 8.5, -8.5, 0.1, 100]}
				/>
			</directionalLight>

			<PerformanceMonitor onDecline={() => setIsLow(true)} />

			{!isLow ? (
				<>
					<directionalLight
						ref={lightRef2}
						intensity={0.5}
						color={'#f7b03e'}
						position={[14.1, 4.6, -3.4]}
						castShadow
						shadow-mapSize={2048}
						shadow-camera-top={80}
						shadow-camera-right={80}
						shadow-camera-bottom={-80}
						shadow-camera-left={-80}
						target={lookAtRef.current}
					/>

					<rectAreaLight
						position={[17, 2, 1]}
						color={'#ffc267'}
						intensity={1}
						lookAt={lookAtRef.current}
						width={10}
						height={5}
						rotation={[0, Math.PI / 2, 0]}
					/>
				</>
			) : null}

			<object3D ref={lookAtRef} position={[0, 2.5, 0]} />

			<SoftShadows size={15} focus={2} samples={isLow ? 4 : 12} />
		</>
	);
}

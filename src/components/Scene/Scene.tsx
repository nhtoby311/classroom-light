import {
	Environment,
	OrbitControls,
	OrthographicCamera,
	PerspectiveCamera,
	SoftShadows,
	useHelper,
	PerformanceMonitor,
} from '@react-three/drei';
import { Model } from './Model';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import LerpRig from '../LerpRig/LerpRig';
import useTime from '../../store/store';
import { Perf } from 'r3f-perf';
import { easing } from 'maath';
import Effects from './Effects';

export default function Scene() {
	const currentTime = useTime((state) => state.currentTime);

	const lightRef = useRef<any>();
	const lightRef2 = useRef<any>();

	useHelper(lightRef, THREE.DirectionalLightHelper, 0.5, 'cyan');

	const lookAtRef = useRef<any>();

	//const ZLightPosition = 3.4 - currentTime / 2;

	const ZLightPosition = Math.sin(currentTime * 0.02 * Math.PI) * 25;
	const XLightPosition = Math.cos(currentTime * 0.02 * Math.PI) * 25;

	// useFrame(() => {
	// 	lightRef.current.lookAt(lookAtRef.current);
	// });
	const vec = new THREE.Vector3();
	// useFrame(({ mouse }) => {
	// 	// Have mouse position control lightRef position
	// 	vec.set(
	// 		lightRef.current.position.x,
	// 		lightRef.current.position.y,
	// 		mouse.x * -5
	// 	);

	// 	lightRef.current.position.lerp(vec, 0.025);
	// });

	const vec2 = new THREE.Vector3();
	useFrame((_, delta) => {
		//lightRef.current.position.lerp(vec2, 0.005);

		vec2.set(XLightPosition, lightRef.current.position.y, ZLightPosition);
		easing.damp3(lightRef.current.position, vec2, 1.5, delta);
		if (!isLow) easing.damp3(lightRef2.current.position, vec2, 1.5, delta);
	});

	const rectLightRef = useRef<any>();

	const controlsPerformace = useControls('performance', {
		perfVisible: true,
	});

	const [isLow, setIsLow] = useState(false);

	// useHelper(rectLightRef, RectAreaLightHelper, 'cyan');

	return (
		<>
			{/* <Environment preset='night' background /> */}

			{controlsPerformace.perfVisible && <Perf position={'top-left'} />}

			<color attach='background' args={['#ffffff']} />

			{/* {!isLow ? <Effects /> : null} */}

			{/* <ambientLight color={'#191c37'} intensity={1} /> */}
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
						ref={rectLightRef}
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

			{/* <ambientLight intensity={0.6} /> */}

			<Model scale={0.2} />

			<mesh position={[0, 1, 0]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color='red' />
			</mesh>
			<PerspectiveCamera
				// rotation={[
				// 	controlsCamera.rotation.x,
				// 	controlsCamera.rotation.y,
				// 	controlsCamera.rotation.z,
				// ]}
				fov={80}
				makeDefault
				position={[2.5, 1.6, -6]}
				rotation={[0, Math.PI, 0]}
				near={0.1}
				far={10000}
			/>

			<LerpRig
				startX={2.4}
				startY={1.6}
				lookAt={[0, 1, 0]}
				propotion={1}
				propotionY={0.3}
			/>

			<object3D ref={lookAtRef} position={[0, 2.5, 0]} />

			<SoftShadows size={15} focus={2} samples={isLow ? 4 : 12} />

			{/* <OrbitControls /> */}
		</>
	);
}

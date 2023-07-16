import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
	SoftShadows,
	useHelper,
} from '@react-three/drei';
import { Model } from './Model';
import * as THREE from 'three';
import { useRef } from 'react';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import LerpRig from '../LerpRig/LerpRig';
import useTime from '../../store/store';

export default function Scene() {
	const controlsCamera = useControls('camera', {
		fov: 25,
		near: 0.1,
		far: 1000,
		position: {
			value: {
				x: 2.5,
				y: 1.6,
				z: -6,
			},
			step: 0.1,
		},
		rotation: {
			value: {
				x: 0,
				y: 2.2,
				z: 0,
			},
			step: 0.1,
		},
	});

	const controlsLight = useControls('light', {
		position: {
			value: {
				x: 14.1,
				y: 6.6,
				z: -3.4,
			},
			step: 0.1,
		},
	});

	const currentTime = useTime((state) => state.currentTime);

	const lightRef = useRef<any>();
	useHelper(lightRef, THREE.DirectionalLightHelper, 0.5, 'cyan');

	const lookAtRef = useRef<any>();

	//const ZLightPosition = 3.4 - currentTime / 2;

	const ZLightPosition = Math.sin(currentTime * 0.1) * Math.PI * 4.2;

	const XLightPosition = Math.cos(currentTime * 0.1) * Math.PI * 4.2;

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
	useFrame(() => {
		vec2.set(XLightPosition, lightRef.current.position.y, ZLightPosition);
		lightRef.current.position.lerp(vec2, 0.005);
	});

	const rectLightRef = useRef<any>();

	// useHelper(rectLightRef, RectAreaLightHelper, 'cyan');

	return (
		<>
			{/* <Environment preset='night' background /> */}

			<color attach='background' args={['#ffffff']} />

			{/* <ambientLight color={'#191c37'} intensity={1} /> */}
			<ambientLight color={'#72643d'} intensity={0.6} />
			<directionalLight
				intensity={2.5}
				color={'#f7b03e'}
				ref={lightRef}
				position={[
					controlsLight.position.x,
					controlsLight.position.y,
					controlsLight.position.z,
				]}
				castShadow
				shadow-mapSize={2048}
				shadow-camera-top={30}
				shadow-camera-right={30}
				shadow-camera-bottom={-30}
				shadow-camera-left={-30}
				target={lookAtRef.current}
			/>

			{/* <directionalLight
				intensity={1.5}
				color={'#f7b03e'}
				position={[
					controlsLight.position.x,
					controlsLight.position.y,
					controlsLight.position.z,
				]}
				castShadow
				shadow-mapSize={2048}
				shadow-camera-top={50}
				shadow-camera-right={50}
				shadow-camera-bottom={-50}
				shadow-camera-left={-50}
				target={lookAtRef.current}
			/> */}

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
				position={[
					controlsCamera.position.x,
					controlsCamera.position.y,
					controlsCamera.position.z,
				]}
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

			<SoftShadows size={15} focus={2} samples={8} />

			{/* <OrbitControls /> */}
		</>
	);
}

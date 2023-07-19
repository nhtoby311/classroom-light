import { useMemo, useRef, useState } from 'react';
import useStore from '../../store/store';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { PerformanceMonitor, SoftShadows } from '@react-three/drei';
import { motion as motion3d } from 'framer-motion-3d';
import { THEME } from '../../store/slices/themeSlice';

export default function Lights() {
	const currentTime = useStore((state) => state.currentTime);

	const currentTheme = useStore((state) => state.currentTheme);

	const isDayNightCycle = useStore((state) => state.isDayNightCycle);

	const factor = useStore((state) => state.factor);

	const lookAtRef = useRef<any>();

	const lightRef = useRef<any>();
	const lightRef2 = useRef<any>();

	const ZLightPosition = Math.sin(currentTime * 0.02 * Math.PI) * 25;
	const XLightPosition = Math.cos(currentTime * 0.02 * Math.PI) * 25;

	const [isLow, setIsLow] = useState(
		localStorage.getItem('isLow') === 'true' || false
	);

	const vec2 = new THREE.Vector3();
	useFrame((_, delta) => {
		//lightRef.current.position.lerp(vec2, 0.005);

		vec2.set(XLightPosition, lightRef.current.position.y, ZLightPosition);
		easing.damp3(lightRef.current.position, vec2, 1.5, delta);
		if (!isLow) easing.damp3(lightRef2.current.position, vec2, 1.5, delta);
	});

	//ANIMATION VARIANTS

	const DURATION = useMemo(
		() => (isDayNightCycle ? 20 / factor : 2.5),
		[factor, isDayNightCycle]
	);

	type VARIANT = {
		[K in THEME]: any;
	};

	const variantsDirecLight: VARIANT = {
		yellow: {
			color: '#f7b03e',
			transition: { duration: DURATION },
		},
		'b&w': {
			color: '#ffffff',
			transition: { duration: DURATION },
		},
		dark: {
			color: '#383838',
			transition: { duration: DURATION },
		},
		light: {
			color: '#fbed6d',
			transition: { duration: DURATION },
		},
	};

	const variantsAmbiLight: VARIANT = {
		yellow: {
			color: '#72643d',
			transition: { duration: DURATION },
		},
		'b&w': {
			color: '#676767',
			transition: { duration: DURATION },
		},
		dark: {
			color: '#191a24',
			transition: { duration: DURATION },
		},
		light: {
			color: '#5e5e4e',
			transition: { duration: DURATION },
		},
	};

	const variantsRectAreaLight: VARIANT = {
		yellow: {
			color: '#ffc267',
			transition: { duration: DURATION },
		},
		'b&w': {
			color: '#bebdc0',
			transition: { duration: DURATION },
		},
		dark: {
			color: '#7e81ae',
			transition: { duration: DURATION },
		},
		light: {
			color: '#f8d98b',
			transition: { duration: DURATION },
		},
	};

	const variantsMeshLight: VARIANT = {
		yellow: {
			color: '#ffcead',
			transition: { duration: DURATION },
		},
		'b&w': {
			color: '#e1e1e1',
			transition: { duration: DURATION },
		},
		dark: {
			color: '#191a28',
			transition: { duration: DURATION },
		},
		light: {
			color: '#ffffff',
			transition: { duration: DURATION },
		},
	};

	// useHelper(rectLightRef, RectAreaLightHelper, 'cyan');

	return (
		<>
			<motion3d.ambientLight
				animate={currentTheme}
				variants={variantsAmbiLight}
				intensity={0.6}
			/>
			<motion3d.directionalLight
				intensity={2.5}
				animate={currentTheme}
				variants={variantsDirecLight}
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
			</motion3d.directionalLight>

			<mesh position={[7, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
				<planeGeometry args={[40, 20, 1]} />
				<motion3d.meshBasicMaterial
					animate={currentTheme}
					variants={variantsMeshLight}
				/>
			</mesh>

			<PerformanceMonitor
				onDecline={() => {
					localStorage.setItem('isLow', 'true');
					setIsLow(true);
				}}
			/>

			{!isLow ? (
				<>
					<motion3d.directionalLight
						ref={lightRef2}
						intensity={0.5}
						animate={currentTheme}
						variants={variantsDirecLight}
						position={[14.1, 4.6, -3.4]}
						castShadow
						shadow-mapSize={2048}
						shadow-camera-top={80}
						shadow-camera-right={80}
						shadow-camera-bottom={-80}
						shadow-camera-left={-80}
						target={lookAtRef.current}
					/>

					<motion3d.rectAreaLight
						position={[17, 2, 1]}
						animate={currentTheme}
						variants={variantsRectAreaLight}
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

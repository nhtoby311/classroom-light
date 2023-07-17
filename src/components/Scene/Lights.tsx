import { useRef, useState } from 'react';
import useStore from '../../store/store';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { PerformanceMonitor, SoftShadows } from '@react-three/drei';
import { motion as motion3d } from 'framer-motion-3d';

export default function Lights() {
	const currentTime = useStore((state) => state.currentTime);

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
			<motion3d.ambientLight
				animate={{ color: ['#72643d', '#676767'] }}
				transition={{ duration: 10 }}
				intensity={0.6}
			/>
			<motion3d.directionalLight
				intensity={2.5}
				//color={'#f7b03e'}
				animate={{ color: ['#f7b03e', '#ffffff'] }}
				transition={{ duration: 10 }}
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

			<PerformanceMonitor onDecline={() => setIsLow(true)} />

			{!isLow ? (
				<>
					<motion3d.directionalLight
						ref={lightRef2}
						intensity={0.5}
						animate={{ color: ['#f7b03e', '#ffffff'] }}
						transition={{ duration: 10 }}
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
						animate={{ color: ['#ffc267', '#bebdc0'] }}
						transition={{ duration: 10 }}
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

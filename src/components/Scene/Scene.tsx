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

import LerpRig from '../LerpRig/LerpRig';

import Effects from './Effects';
import Lights from './Lights';
import { Perf } from 'r3f-perf';

export default function Scene() {
	return (
		<>
			{/* {controlsPerformace.perfVisible && <Perf position={'top-left'} />} */}

			{/* <Perf position={'top-left'} /> */}
			<color attach='background' args={['#ffffff']} />

			<Lights />

			<Model scale={0.2} />

			<PerspectiveCamera
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

			{/* <OrbitControls /> */}
		</>
	);
}

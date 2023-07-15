import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { useState } from 'react';
import Scene from './components/Scene/Scene';
import * as THREE from 'three';

function App() {
	return (
		<div className='background-canvas'>
			<Leva />
			<Canvas
				shadows
				gl={{
					antialias: true,
					toneMapping: THREE.ACESFilmicToneMapping,
				}}>
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;

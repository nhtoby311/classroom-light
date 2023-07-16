import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { useState } from 'react';
import Scene from './components/Scene/Scene';
import * as THREE from 'three';
import Contents from './components/Contents/Contents';

function App() {
	return (
		<>
			<Leva />
			<div className='background-canvas'>
				<Canvas
					shadows
					gl={{
						antialias: true,
						toneMapping: THREE.ACESFilmicToneMapping,
					}}>
					<Scene />
				</Canvas>
			</div>
			<Contents />
		</>
	);
}

export default App;

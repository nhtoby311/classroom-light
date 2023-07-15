import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
	startX?: number;
	startY?: number;
	startZ?: number;
	lookAt?: number[];
	alpha?: number;
	propotion?: number;
	propotionY?: number;
};

export default function LerpRig({
	startX,
	startY,
	startZ,
	lookAt,
	alpha = 0.025,
	propotion = 1,
	propotionY,
}: Props) {
	const vec = new THREE.Vector3();
	useFrame(({ camera, mouse }) => {
		// Have to get the final camera positionlerp but keep the after animated camera
		vec.set(
			(startX || 0) + mouse.x * propotion,
			(startY || 0) +
				mouse.y * (propotionY !== undefined ? propotionY : propotion),
			camera.position.z
		);

		camera.position.lerp(vec, alpha);

		if (lookAt) camera.lookAt(lookAt[0], lookAt[1], lookAt[2]);

		//console.log('camera', camera.position.x, camera.position.y);
	});

	return null;
}

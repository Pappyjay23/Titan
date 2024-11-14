import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import ShowBg from "../assets/images/show_bg_2.png";
import * as THREE from "three";

interface CarModelProps {
	selectedColor: string;
}

const CarModelThree = ({ selectedColor }: CarModelProps) => {
	return (
		<Canvas
			camera={{ position: [0, 0, 5] }}
			className='carModel bg-contain bg-center rounded-[2rem] border border-white'
			style={{ backgroundImage: `url(${ShowBg})` }}>
			<ambientLight intensity={0.4} />
			<pointLight position={[10, 10, 10]} />
			<Stage environment={null}>
				<CarModel selectedColor={selectedColor} />
			</Stage>
		</Canvas>
	);
};

const CarModel = ({ selectedColor }: CarModelProps) => {
	const { scene, materials } = useGLTF("/3d-models/car_model_2/scene.gltf");
	const modelRef = useRef<THREE.Group>(null);

	console.log("Selected color:", selectedColor)
	console.log("Materials", materials);


	useFrame(() => {
		// Apply a small rotation increment to the model for 360 rotation effect
		if (modelRef.current) {
			modelRef.current.rotation.y += 0.007; // Adjust speed as needed
		}
	});

	// useEffect(() => {
	// 	const materialName = "767c8b7b_1260_4325_b83f_f635800d9059_Standard00E280";
	// 	const material = materials[materialName];

	// 	if (material && material instanceof THREE.MeshStandardMaterial) {
	// 		// Remove the texture map
	// 		material.map = null;
	// 		material.color.set(selectedColor); // Set the new color
	// 		material.needsUpdate = true; // Trigger an update to apply the changes
	// 	}
	// }, [selectedColor, materials]);

	// useEffect(() => {
	// 	// Iterate over the materials in the loaded model
	// 	Object.keys(materials).forEach((materialName) => {
	// 		const material = materials[materialName];

	// 		if (material && material instanceof THREE.MeshStandardMaterial) {
	// 			// Remove the texture map if any
	// 			material.map = null;
	// 			material.color.set(selectedColor); // Set the new color
	// 			material.needsUpdate = true; // Trigger an update to apply the changes
	// 		}
	// 	});
	// }, [selectedColor, materials]);

	return <primitive ref={modelRef} object={scene} scale={7} />;
};

useGLTF.preload("/3d-models/car_model_2/scene.gltf");

export default CarModelThree;

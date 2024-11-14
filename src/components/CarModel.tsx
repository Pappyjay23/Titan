import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Stage, useGLTF } from "@react-three/drei";
import ShowBg from "../assets/images/show_bg_2.png";
import * as THREE from "three";
import { Car2 } from "./Car2";

interface CarModelProps {
  selectedColor: string;
}

const CarModelThree = ({ selectedColor }: CarModelProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="carModel bg-contain bg-center rounded-[2rem] border border-white"
      style={{ backgroundImage: `url(${ShowBg})` }}
    >
      <ambientLight intensity={3.5} />
      <pointLight position={[10, 10, 10]} />
      <Stage environment={null}>
        <Car2 selectedColor={selectedColor} />
        {/* <CarModel selectedColor={selectedColor} /> */}
      </Stage>
      <Environment preset="city" />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
    </Canvas>
  );
};

const CarModel = ({ selectedColor }: CarModelProps) => {
  const { scene, materials } = useGLTF("/3d-models/car_model_2/scene.gltf");
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // This converts the hex value of the color to rgb. You fit also create a hex to rgb util function.
    const color = new THREE.Color(selectedColor);
    console.log(color);

    Object.keys(materials).forEach((materialName) => {
      const material = materials[materialName];
      console.log(material);

      if (material && material instanceof THREE.MeshStandardMaterial) {
        material.map = null;
        material.color = color;
      }
    });
  }, [selectedColor, materials]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={7} />;
};

useGLTF.preload("/3d-models/car_model_2/scene.gltf");

export default CarModelThree;

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export function Car2({ selectedColor, ...props }: { selectedColor: string }) {
  const { nodes, materials } = useGLTF("/3d-models/new_car.glb");
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.007;
    }
  });

  useEffect(() => {
    if (selectedColor) {
      const color = new THREE.Color(selectedColor);
      const colorMaterials = ["Main_Color", "Second_Color"];

      colorMaterials.forEach((materialName) => {
        if (materials[materialName]) {
          (materials[materialName] as THREE.MeshStandardMaterial).color = color;
        }
      });
    }
  }, [selectedColor, materials]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[0.3, 1.086, 0]} scale={[5.669, 0.811, 2.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry} // I usually use jsx, cos adding types to threejs is quite tasking. BUt just leaving this cos your codebase is in typescript. Also you'll notice you can see the names of the materials for each mesh. Pretty neat innit.
          material={materials.Main_Color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Second_Color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Headlamp_Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Headlamp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials["H._Light"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Brakelamp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Exhaust}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Mirror}
        />
      </group>
      <group
        position={[4.221, 0.969, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.901, 0.376, 0.901]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Tyre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Tyre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Rims}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Rims}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Dark}
        />
      </group>
      <group
        position={[-3.562, 0.969, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.901, 0.376, 0.901]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Tyre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Tyre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.Rims}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Rims}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.Dark}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d-models/new_car.glb");

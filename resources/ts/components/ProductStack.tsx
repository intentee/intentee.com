import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { type Mesh } from "three";

export function ProductStack() {
  const meshRef = useRef<null | Mesh>(null);

  useFrame(function (state, delta) {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </>
  );
}

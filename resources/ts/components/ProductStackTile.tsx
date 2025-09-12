import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Euler, Vector3, type Mesh } from "three";

export function ProductStackTile({
  color,
  layer,
}: {
  color: string;
  layer: number;
}) {
  const meshRef = useRef<null | Mesh>(null);
  const meshPosition = new Vector3(3, -1 + 2 * layer, 0);
  const meshRotation = new Euler(0, 0, 0);

  useFrame(function (state, delta) {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <>
      <mesh position={meshPosition} ref={meshRef} rotation={meshRotation}>
        <boxGeometry args={[6, 0.25, 6]} />
        <meshBasicMaterial color={color} wireframe />
      </mesh>
    </>
  );
}

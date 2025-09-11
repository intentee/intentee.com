import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { Html } from "@react-three/drei";
import { type Mesh } from "three";

import { productStackTile__label } from "./ProductStackTile.module.css";

export function ProductStackTile({
  color,
  label,
  position,
}: {
  color: string,
  label: string,
  position: [number, number, number],
}) {
  const meshRef = useRef<null | Mesh>(null);

  const htmlPosition = useMemo<[number, number, number]>(function () {
    return [
      position[0] + 5,
      position[1],
      position[2],
    ];
  }, [...position]);

  useFrame(function (state, delta) {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <>
      <Html position={htmlPosition} wrapperClass={productStackTile__label}>{label}</Html>
      <mesh
        position={position}
        ref={meshRef}
      >
        <boxGeometry args={[4, 0.5, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}

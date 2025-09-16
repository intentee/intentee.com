import { animated, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import React, { memo, useRef } from "react";
import { Vector3, type Mesh } from "three";

export const ProductStackTile = memo(function ProductStackTile({
  isHovered,
  layer,
  productColor,
}: {
  isHovered: boolean;
  layer: number;
  productColor: string;
}) {
  const meshRotation = useRef(0);
  const meshRef = useRef<null | Mesh>(null);
  const meshPosition = new Vector3(3, -1 + 1.5 * layer, 0);

  const springProps = useSpring({
    color: isHovered ? productColor : "#eee",
    wireframe: !isHovered,
    config: {
      tension: 150,
      friction: 25,
    },
  });

  useFrame(function (state, delta) {
    if (meshRef.current) {
      meshRotation.current += 0.1 * delta;
      meshRef.current.rotation.y = meshRotation.current;
    }
  });

  return (
    <animated.mesh position={meshPosition} ref={meshRef}>
      <boxGeometry args={[6, 0.25, 6]} />
      <animated.meshPhysicalMaterial
        {...springProps}
        emissive={springProps.color}
      />
    </animated.mesh>
  );
});

import { Canvas } from "@react-three/fiber";
import React from "react";

import { ProductStack } from "./ProductStack";

export function HomepageStage() {
  return (
    <Canvas
      camera={{
        fov: 90,
        position: [0, 4, 5],
      }}
      className="homepage__three-stage"
      flat
    >
      <ProductStack />
    </Canvas>
  );
}

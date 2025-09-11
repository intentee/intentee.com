import { Canvas } from "@react-three/fiber";
import React from "react";

import { ProductStack } from "./ProductStack";

export function HomepageStage() {
  return (
    <Canvas className="homepage__three-stage">
      <ProductStack />
    </Canvas>
  );
}

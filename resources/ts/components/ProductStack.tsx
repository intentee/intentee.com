import React from "react";
import { ProductStackTile } from "./ProductStackTile";

export function ProductStack() {
  return (
    <>
      <ProductStackTile
        color="white"
        description="Connect your teams to achieve optimal MCP implementations"
        layer={2}
        label="Grouper"
      />
      <ProductStackTile
        color="white"
        description="Make your docs accessible in AI tools"
        layer={1}
        label="Poet"
      />
      <ProductStackTile
        color="white"
        description="Keep AI on your own servers"
        layer={0}
        label="Paddler"
      />
      <ambientLight intensity={3} />
      <directionalLight position={[0, 0, 5]} color="white" lookAt={[4, 0, 0]} />
    </>
  );
}

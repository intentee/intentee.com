import React from "react";
import { ProductStackTile } from "./ProductStackTile";

export function ProductStack() {
  return (
    <>
      <ProductStackTile
        color="hotpink"
        label="Grouper"
        position={[-2.5, 2, 0]}
      />
      <ProductStackTile
        color="cyan"
        label="Poet"
        position={[-2.5, 1, 0]}
      />
      <ProductStackTile
        color="yellow"
        label="Paddler"
        position={[-2.5, 0, 0]}
      />
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 5]} color="white" />
    </>
  );
}

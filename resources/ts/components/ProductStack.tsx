import React from "react";
import { ProductStackTile } from "./ProductStackTile";

export function ProductStack() {
  return (
    <>
      <ProductStackTile color="white" layer={2} />
      <ProductStackTile color="white" layer={1} />
      <ProductStackTile color="white" layer={0} />
      <ambientLight intensity={3} />
      <directionalLight position={[0, 0, 5]} color="white" lookAt={[4, 0, 0]} />
    </>
  );
}

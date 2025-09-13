import React from "react";

import { type LabelId } from "../LabelId.type";
import {
  GROUPER_HIGHLIGHT_COLOR,
  PADDLER_HIGHLIGHT_COLOR,
  POET_HIGHLIGHT_COLOR,
  REWIRE_HIGHLIGHT_COLOR,
} from "../colors";
import { ProductStackTile } from "./ProductStackTile";

export function ProductStack({
  hoveredProduct,
}: {
  hoveredProduct: null | LabelId;
}) {
  return (
    <>
      <ProductStackTile
        productColor={REWIRE_HIGHLIGHT_COLOR}
        isHovered={"rewire" === hoveredProduct}
        layer={3}
      />
      <ProductStackTile
        productColor={GROUPER_HIGHLIGHT_COLOR}
        isHovered={"grouper" === hoveredProduct}
        layer={2}
      />
      <ProductStackTile
        productColor={POET_HIGHLIGHT_COLOR}
        isHovered={"poet" === hoveredProduct}
        layer={1}
      />
      <ProductStackTile
        productColor={PADDLER_HIGHLIGHT_COLOR}
        isHovered={"paddler" === hoveredProduct}
        layer={0}
      />
      <ambientLight intensity={3} />
      <directionalLight
        intensity={3}
        position={[0, 0, 5]}
        color="white"
        lookAt={[0, 0, 0]}
      />
    </>
  );
}

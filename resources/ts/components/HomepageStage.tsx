import { createRoot, events, extend } from "@react-three/fiber";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

import { type LabelId } from "../LabelId.type";
import { type LabelInteractionState } from "../LabelInteractionState.interface";
import {
  GROUPER_HIGHLIGHT_COLOR,
  PADDLER_HIGHLIGHT_COLOR,
  POET_HIGHLIGHT_COLOR,
  REWIRE_HIGHLIGHT_COLOR,
} from "../colors";
import { ProductStack } from "./ProductStack";
import { ProductStackTileLabel } from "./ProductStackTileLabel";

import {
  stage,
  stage__content,
  stage__products,
} from "./HomepageStage.module.css";

extend(THREE as unknown as any);

export function HomepageStage() {
  const [canvasRef, setCanvasRef] = useState<null | HTMLCanvasElement>(null);
  const [hoveredProduct, setHoveredProduct] = useState<null | LabelId>(null);
  const stageRef = useRef<null | HTMLDivElement>(null);

  const fiberRoot = useMemo(
    function () {
      if (!canvasRef) {
        return;
      }

      const fiberRoot = createRoot(canvasRef);

      fiberRoot.configure({
        events,
        camera: {
          position: [0, 5, 5],
        },
      });

      return fiberRoot;
    },
    [canvasRef],
  );

  useEffect(
    function () {
      if (fiberRoot) {
        fiberRoot.render(<ProductStack hoveredProduct={hoveredProduct} />);
      }
    },
    [fiberRoot, hoveredProduct],
  );

  useEffect(
    function () {
      return function () {
        fiberRoot?.unmount();
      };
    },
    [fiberRoot],
  );

  useEffect(
    function () {
      if (!fiberRoot || !stageRef.current) {
        return;
      }

      const current = stageRef.current;

      const resizeObserver = new ResizeObserver(function (entries) {
        for (const entry of entries) {
          if (entry.target === current) {
            fiberRoot.configure({
              size: {
                height: entry.contentRect.height,
                left: 0,
                top: 0,
                width: entry.contentRect.width,
              },
            });

            break;
          }
        }
      });

      resizeObserver.observe(current);

      return function () {
        resizeObserver.disconnect();
      };
    },
    [fiberRoot, stageRef.current],
  );

  const onInteractionStateChange = useCallback(
    function ({ id, isHovered }: LabelInteractionState) {
      if (isHovered) {
        setHoveredProduct(id);
      } else {
        setHoveredProduct(null);
      }
    },
    [setHoveredProduct],
  );

  return (
    <div className={stage} ref={stageRef}>
      <canvas ref={setCanvasRef} />
      <div className={stage__content}>
        <div className={stage__products}>
          <ProductStackTileLabel
            description="Build code-free applications"
            href="https://rewire.intentee.com"
            id="rewire"
            label="Rewire"
            onInteractionStateChange={onInteractionStateChange}
            productColor={REWIRE_HIGHLIGHT_COLOR}
            releaseDate="TBA"
          />
          <ProductStackTileLabel
            description="Connect your teams to achieve optimal MCP implementations"
            href="https://grouper.intentee.com"
            id="grouper"
            label="Grouper"
            onInteractionStateChange={onInteractionStateChange}
            productColor={GROUPER_HIGHLIGHT_COLOR}
            releaseDate="to be released in H1 2026"
          />
          <ProductStackTileLabel
            description="Make your docs accessible in AI tools"
            href="https://poet.intentee.com"
            id="poet"
            label="Poet"
            onInteractionStateChange={onInteractionStateChange}
            productColor={POET_HIGHLIGHT_COLOR}
            releaseDate="to be released in Q4 2025 (alpha version available)"
          />
          <ProductStackTileLabel
            description="Keep AI on your own servers"
            href="https://paddler.intentee.com"
            id="paddler"
            label="Paddler"
            onInteractionStateChange={onInteractionStateChange}
            productColor={PADDLER_HIGHLIGHT_COLOR}
            releaseDate="released in Q3 2025"
          />
        </div>
      </div>
    </div>
  );
}

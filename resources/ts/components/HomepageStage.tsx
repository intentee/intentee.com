import { createRoot, events, extend } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { ProductStack } from "./ProductStack";

import { stage } from "./HomepageStage.module.css";

extend(THREE as unknown as any);

export function HomepageStage() {
  const [canvasRef, setCanvasRef] = useState<null | HTMLCanvasElement>(null);
  const stageRef = useRef<null | HTMLDivElement>(null);

  const fiberRoot = useMemo(
    function () {
      if (!canvasRef) {
        return;
      }

      const fiberRoot = createRoot(canvasRef);

      (async function () {
        await fiberRoot.configure({
          events,
          camera: {
            position: [0, 5, 5],
          },
        });

        fiberRoot.render(<ProductStack />);
      })();

      return fiberRoot;
    },
    [canvasRef],
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

  return (
    <div className={stage} ref={stageRef}>
      <canvas ref={setCanvasRef} />
    </div>
  );
}

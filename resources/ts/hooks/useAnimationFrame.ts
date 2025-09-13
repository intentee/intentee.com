import { useEffect } from "react";

export function useAnimationFrame(callback: () => void) {
  useEffect(
    function () {
      let frameId = requestAnimationFrame(animate);

      function animate() {
        try {
          callback();
        } finally {
          frameId = requestAnimationFrame(animate);
        }
      }

      return function () {
        if (frameId) {
          cancelAnimationFrame(frameId);
        }
      };
    },
    [callback],
  );
}

import debounce from "debounce";
import React from "react";
import { createRoot } from "react-dom/client";
import { HomepageStage } from "./components/HomepageStage";

function StageController({ stage }: { stage: HTMLElement }) {
  const root = createRoot(stage);

  return Object.freeze({
    start() {
      console.log("START");
      root.render(<HomepageStage />);
    },
    stop() {
      console.log("STOP");
      root.unmount();
    },
  });
}

let abortController: null | AbortController = null;

function initialize() {
  const stage = document.getElementById("stage");

  if (!(stage instanceof HTMLElement)) {
    throw new Error("#stage element not found");
  }

  if (abortController) {
    // cancel the previous controller
    abortController.abort();
  }

  abortController = new AbortController();

  const stageController = StageController({
    stage,
  });

  abortController.signal.addEventListener(
    "abort",
    function () {
      abortController = null;
      stageController.stop();
    },
    {
      once: true,
    },
  );

  stageController.start();

  document.addEventListener("poet:live-reloaded", initialize, {
    once: true,
  });
}

const isWatching =
  document.querySelector("meta[name='poet:is_watching']") instanceof
  HTMLMetaElement;

if (isWatching) {
  const initializeDebounced = debounce(initialize, 200);

  initializeDebounced();
} else {
  initialize();
}

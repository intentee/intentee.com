import { initialize } from "jarmuz-preset-poet/live-reload/initialize";
import React from "react";
import { createRoot } from "react-dom/client";
import { HomepageStage } from "./components/HomepageStage";

function StageController({ stage }: { stage: HTMLElement }) {
  const root = createRoot(stage);

  return Object.freeze({
    start() {
      root.render(<HomepageStage />);
    },
    stop() {
      root.unmount();
    },
  });
}

function main(signal: AbortSignal) {
  const stage = document.getElementById("homepage");

  if (!(stage instanceof HTMLElement)) {
    throw new Error("#stage element not found");
  }

  const stageController = StageController({
    stage,
  });

  stageController.start();
  signal.addEventListener(
    "abort",
    function () {
      stageController.stop();
    },
    {
      once: true,
    },
  );
}

initialize(import.meta.url, function ({ signal }) {
  main(signal);
});

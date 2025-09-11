import { basic } from "jarmuz/job-types";
import { execFileSync } from "node:child_process";
import getExePath from "../node_modules/@typescript/native-preview/lib/getExePath.js";

basic(function () {
  try {
    execFileSync(getExePath(), [], {
      stdio: "inherit",
    });
  } catch (err) {
    if (err.status) {
      return 0 === err.status;
    } else {
      throw err;
    }
  }
});

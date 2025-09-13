import { spawner } from "jarmuz/job-types";

spawner(function ({ baseDirectory, command }) {
  return command(`
      poet generate ${baseDirectory}
        --public-path https://intentee.com/
        --output-directory public
    `);
});

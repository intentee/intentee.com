import { liveReload } from "jarmuz-preset-poet/live-reload";

liveReload(function ({ morphDocument, updatedHTMLWithoutDoctype }) {
  morphDocument(updatedHTMLWithoutDoctype);

  document.dispatchEvent(new Event("poet:live-reloaded"));
});

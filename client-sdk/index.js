import { initScriptInventory } from "./scriptInventory.js";

export const SecuritySDK = {
  init: (config) => {
    console.log("Security SDK Initialized", config);
    initScriptInventory();
  },
  sendEvent: (event) => {
    // existing logic
  },
};

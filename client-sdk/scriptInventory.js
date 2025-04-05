// client-sdk/scriptInventory.js

function collectScriptInventory() {
    const scripts = document.querySelectorAll("script");
    const scriptData = [];
  
    scripts.forEach((script) => {
      const src = script.getAttribute("src") || "inline";
      const type = script.getAttribute("type") || "text/javascript";
      const integrity = script.getAttribute("integrity") || null;
      const domain = src.startsWith("http") ? new URL(src).hostname : "inline";
  
      scriptData.push({
        src,
        type,
        integrity,
        domain,
        timestamp: Date.now(),
      });
    });
  
    return scriptData;
  }
  
  function sendToBackend(data) {
    fetch("https://api.yourserver.com/telemetry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "script-inventory",
        payload: data,
      }),
    }).catch((err) => console.error("Error sending telemetry:", err));
  }
  
  // 🔁 Initialization
  export function initScriptInventory() {
    const inventory = collectScriptInventory();
    sendToBackend(inventory);
  }
  
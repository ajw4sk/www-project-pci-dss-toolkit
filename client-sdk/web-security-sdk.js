const SecuritySDK = (function () {
    let config = {
      apiKey: null,
      endpoint: null,
      sensitivity: 0.75,
      sessionId: null,
    };
  
    let botMetrics = {
      mousemove: 0,
      click: 0,
      scroll: 0,
    };
  
    function init(userConfig) {
      config = { ...config, ...userConfig };
  
      if (!config.apiKey || !config.endpoint) {
        console.error("SecuritySDK: Missing apiKey or endpoint.");
        return;
      }
  
      setupEventListeners();
      setInterval(sendTelemetry, 10000); // Send every 10 sec
    }
  
    function setupEventListeners() {
      window.addEventListener("mousemove", () => botMetrics.mousemove++);
      window.addEventListener("click", () => botMetrics.click++);
      window.addEventListener("scroll", () => botMetrics.scroll++);
    }
  
    function calculateBotScore() {
      const total = botMetrics.mousemove + botMetrics.click + botMetrics.scroll;
  
      if (total === 0) return 1; // Highly bot-like (no activity)
  
      const mouseFactor = botMetrics.mousemove / total;
      const clickFactor = botMetrics.click / total;
      const scrollFactor = botMetrics.scroll / total;
  
      let randomness = Math.random() * 0.1; // Simulate behavioral noise
      const botScore =
        1 -
        ((mouseFactor + clickFactor + scrollFactor) / 3 - randomness) *
          config.sensitivity;
  
      return Math.min(Math.max(botScore, 0), 1); // Clamp between 0–1
    }
  
    function sendTelemetry() {
      const payload = {
        sessionId: config.sessionId || `sess-${Date.now()}`,
        timestamp: new Date().toISOString(),
        botScore: calculateBotScore(),
        metrics: { ...botMetrics },
        userAgent: navigator.userAgent,
        apiKey: config.apiKey,
      };
  
      // Reset metrics after sending
      botMetrics = {
        mousemove: 0,
        click: 0,
        scroll: 0,
      };
  
      fetch(config.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).catch((err) =>
        console.error("SecuritySDK: Failed to send telemetry", err)
      );
    }
  
    return {
      init,
    };
  })();
  
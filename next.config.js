const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
});

module.exports = withPWA({
  // next.js config
});

import { createApp } from "@boilrjs/core";

const app = createApp({
  server: {
    port: 3000
  },
  plugins: {
    swagger: true
  }
});

app.start();

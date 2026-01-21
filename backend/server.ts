import { createApp } from "@boilrjs/core";

const app = createApp({
  server: {
    port: 3000
  },
  plugins: {
    swagger: true,
    cors: {
      origin: ["http://localhost:4321"],
      methods: ["GET", "POST", "PATCH", "DELETE"]
    }
  }
});

app.start();

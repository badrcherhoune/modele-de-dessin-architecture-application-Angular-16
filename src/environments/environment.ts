import { environment } from "./environment.prod";

// Usage example
if (!environment.dev) {
  console.log('Development Mode');
};
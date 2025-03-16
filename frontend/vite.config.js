// vite.config.js
export default {
    server: {
      proxy: {
        // Proxy requests from the frontend to the backend
        '/users': {
          target: 'http://localhost:9000',
        },
      },
    },
  };
  
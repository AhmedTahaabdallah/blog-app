const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongo_url: 'mongodb://localhost/next-blog-dev'
      }
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongo_url: 'mongodb://localhost/next-blog'
    }
  };
};

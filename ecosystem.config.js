module.exports = {
  apps: [
    {
      name: "nickname-fe",
      script: "npm",
      args: "start",
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
        DEPLOY_ENV: "production",
        PORT: 3006,
      },
    },
  ],
};

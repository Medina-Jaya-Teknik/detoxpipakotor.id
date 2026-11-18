module.exports = {
  apps: [
    {
      name: 'detoxpipakotor',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3004',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3004
      }
    }
  ]
};

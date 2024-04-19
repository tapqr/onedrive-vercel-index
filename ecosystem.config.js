module.exports = {
  apps : [{
    name: "onedrive",
    script: "yarn",
    args: "start",
    env_production: {
      NODE_ENV: "production",
      PORT: 7203,
      REDIS_URL: process.env.REDIS_URL,// "redis://:password@redis_db:6379"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}
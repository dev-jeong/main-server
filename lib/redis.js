const { createClient } = require("redis");

const host = process.env.REDIS_HOST || "localhost";
const port = 6379;
const redisClient = createClient({ url: `redis://${host}:${port}` });

redisClient.connect();

async function setRedis(key, value, ttl) {
  const jsonValue = JSON.stringify(value);
  console.log(jsonValue);
  await redisClient.set(key, jsonValue, "EX", ttl);
}

async function getRedis(key) {
  const value = await redisClient.get(key);
  return value ? JSON.parse(value) : null;
}

module.exports = {
  setRedis,
  getRedis,
};

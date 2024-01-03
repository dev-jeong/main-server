const { createClient } = require('redis');

const host = process.env.REDIS_HOST || "localhost";
const port = 6379

async function createRedisClient() {
  const client = await createClient({ url: `redis://${host}:${port}` })
    .on('error', err => console.log('Redis Client Error', err));
  await client.connect();
  return client;
}

async function setValue(client, key, value, ttl) {
  const jsonValue = JSON.stringify(value);
  await client.set(key, jsonValue, 'EX', ttl);
}

async function getValue(client, key) {
  const value = await client.get(key);
  return value ? JSON.parse(value) : null;
}

module.exports = {
  createRedisClient,
  setValue,
  getValue,
};
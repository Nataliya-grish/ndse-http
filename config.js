module.exports = {
  myKey: process.env.access_key
    ? process.env.access_key
    : "1386f99e260277d4cd1ae921cef0984d",
  url: process.env.pageURL
    ? process.env.pageURL
    : "http://api.weatherstack.com/current",
  region: "Moscow"
};

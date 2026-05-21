const scripts = require('./scripts.js');
const gateway = require('./gateway.js');
const theme = require('./theme.js');
const obfCode = require('./obf.js');

export default async function handler(req, res) {
  try {
    const id = req.query.id || req.url.split('/').pop().split('?')[0] || "home";
    const target = scripts[id];

    if (target && gateway(req)) {
      const response = await fetch(target);
      const rawScript = await response.text();
      const padding = "\n".repeat(1000);
      const payload = `--[[ HttpError: 404 Not Found ]]\n` + padding + `loadstring([[${obfCode}]])([[${rawScript}]])`;
      
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(200).send(payload);
    } else {
      res.setHeader('Content-Type', 'text/html');
      return res.status(403).send(theme);
    }
  } catch (e) {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send("");
  }
}

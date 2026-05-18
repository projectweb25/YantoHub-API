const scripts = require('./scripts.js');
const gateway = require('./gateway.js');
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  const id = req.url.split('/').pop().split('?')[0];
  const target = scripts[id];

  if (target && gateway(req)) {
    try {
      const response = await fetch(target);
      const raw = await response.text();
      const bytes = Array.from(Buffer.from(raw, 'utf8'));
      const byteList = bytes.join(',');
      const payload = `--[[ HttpError: 404 Not Found ]]\n\nloadstring((function() local b={${byteList}}; local s=''; for i=1,#b do s=s..string.char(b[i]) end; return s; end)())()`;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      return res.status(200).send(payload);
    } catch (e) {
      return res.status(500).send("");
    }
  } else {
    const htmlPath = path.join(process.cwd(), 'index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    return res.status(403).send(htmlContent);
  }
}

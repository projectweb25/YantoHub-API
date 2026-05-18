const scripts = require('./scripts.js');
const gateway = require('./gateway.js');
const theme = require('./theme.js');

export default async function handler(req, res) {
  try {
    const id = req.query.id || "home";
    const target = scripts[id];

    if (target && gateway(req)) {
      const response = await fetch(target);
      const raw = await response.text();
      const bytes = Array.from(Buffer.from(raw, 'utf8'));
      const byteList = bytes.join(',');
      const payload = `--[[ HttpError: 404 Not Found ]]\n\nloadstring((function() local b={${byteList}}; local s=''; for i=1,#b do s=s..string.char(b[i]) end; return s; end)())()`;
      res.setHeader('Content-Type: text/plain; charset=utf-8');
      return res.status(200).send(payload);
    } else {
      res.setHeader('Content-Type', 'text/html');
      return res.status(403).send(theme);
    }
  } catch (e) {
    return res.status(500).send("-- Internal Error");
  }
}

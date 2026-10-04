const scripts = require('./scripts.js');

module.exports = async function handler(req, res) {
  try {
    const id = req.query.id || "vip-yanto";
    const target = scripts[id];

    if (!target) {
      return res.status(404).send("--[[ Script ID tidak ditemukan ]]");
    }

    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const raw = await response.text();

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(raw);
  } catch (e) {
    return res.status(500).send("--[[ Server Error ]]");
  }
}

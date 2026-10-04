const scripts = require('./scripts.js');
const theme = require('./theme.js');

module.exports = async function handler(req, res) {
  try {
    const accept = req.headers['accept'] || '';
    const ua = req.headers['user-agent'] || '';
    
    // Deteksi browser yang lebih ketat
    const isBrowser = accept.includes('text/html') && 
                      !ua.includes('Roblox') && 
                      !ua.includes('Delta') && 
                      !ua.includes('Xeno') && 
                      !ua.includes('Solara') &&
                      !ua.includes('Codex') &&
                      !ua.includes('Arceus');

    // Jika yang buka adalah browser, tampilkan website
    if (isBrowser) {
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).send(theme);
    }

    // Jika yang buka adalah Roblox, kirim kode Lua
    const id = req.query.id || "vip-yanto";
    const target = scripts[id];

    if (!target) {
      return res.status(200).send("--[[ Error: Script ID tidak ditemukan ]]");
    }

    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const raw = await response.text();
    
    // PENGAMAN: Jika GitHub mengirim HTML (error), kirim Lua kosong agar tidak 'nil value'
    if (raw.trim().startsWith('<!DOCTYPE html>') || raw.trim().startsWith('<html')) {
      return res.status(200).send("--[[ Error: GitHub mengembalikan HTML. Link mungkin mati atau diblokir. ]]");
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(raw);

  } catch (e) {
    return res.status(200).send("--[[ Error: Server Error ]]");
  }
};

module.exports = async function handler(req, res) {
  try {
    const target = "https://raw.githubusercontent.com/Yantohub25/sc/main/V";
    // Kita pakai proxy untuk mengambil script, biar GitHub nggak blokir Vercel
    const proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(target);
    
    const response = await fetch(proxyUrl);
    const raw = await response.text();
    
    // PENGAMAN: Kalau GitHub kirim HTML/404, kita kirim pesan error dalam format Lua
    if (raw.trim().startsWith('<!DOCTYPE html>') || raw.trim().startsWith('<html') || raw.trim().startsWith('404')) {
      return res.status(200).send('error("Gagal memuat script: Link sumber mati atau diblokir oleh GitHub.")');
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(raw);
  } catch (e) {
    return res.status(200).send('error("Server Error: ' + e.message + '")');
  }
};

export default async function handler(req, res) {
  try {
    const id = req.query.id || req.url.split('/').pop();
    const ua = req.headers['user-agent'] || '';
    const acc = req.headers['accept'] || '';

    let target = "";
    if (id.includes('vip-yanto')) {
      target = "https://raw.githubusercontent.com/Yantohub25/sc/main/V";
    } else if (id.includes('free-yanto')) {
      target = "https://raw.githubusercontent.com/Yantohub25/sc/main/C";
    }

    const isExec = !acc.includes('text/html') || ua.includes('Roblox') || ua.includes('Xeno') || ua.includes('Delta') || ua === "";

    if (target && isExec) {
      const response = await fetch(target);
      const script = await response.text();
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      return res.status(200).send(script);
    } else {
      res.setHeader('Content-Type', 'text/html');
      return res.status(403).send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>YantoHub | Protected</title>
          <style>
            body { background: #050506; color: white; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
            .card { background: rgba(15,15,18,0.98); border: 1px solid #ff000033; border-radius: 30px; padding: 50px; text-align: center; box-shadow: 0 30px 100px #000; width: 400px; }
            h1 { font-size: 30px; text-transform: uppercase; margin-bottom: 10px; }
            h1 span { color: #ff0000; }
            p { color: #666; font-size: 14px; margin-bottom: 30px; }
            .btn { display: inline-block; background: linear-gradient(135deg, #ff0000, #990000); color: white; text-decoration: none; padding: 15px 30px; border-radius: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>AKSES <span>DITOLAK</span></h1>
            <p>Silakan gunakan executor Roblox untuk mengakses sistem YantoHub.</p>
            <a href="https://dsc.gg/yantorobloxhub" class="btn">JOIN DISCORD</a>
          </div>
        </body>
        </html>
      `);
    }
  } catch (e) {
    return res.status(500).send("-- Internal Server Error: " + e.message);
  }
}

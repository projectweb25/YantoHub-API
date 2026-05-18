export default async function handler(req, res) {
  const { id } = req.query;
  const ua = req.headers['user-agent'] || '';
  const acc = req.headers['accept'] || '';

  let target = "";
  if (id === 'vip-yanto') {
    target = "https://raw.githubusercontent.com/Yantohub25/sc/main/V";
  } else if (id === 'free-yanto') {
    target = "https://raw.githubusercontent.com/Yantohub25/sc/main/C";
  }

  const isBrowser = acc.includes('text/html') && !ua.includes('Roblox') && !ua.includes('Xeno') && !ua.includes('Delta');

  if (target && !isBrowser) {
    const response = await fetch(target);
    const script = await response.text();
    res.setHeader('Content-Type', 'text/plain');
    return res.send(script);
  } else {
    res.setHeader('Content-Type', 'text/html');
    return res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>YantoHub | Protected</title>
        <style>
          body { background: #050506; color: white; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; overflow: hidden; }
          .card { background: rgba(15,15,18,0.98); border: 1px solid #ff000033; border-radius: 30px; padding: 50px; text-align: center; box-shadow: 0 30px 100px #000; }
          h1 { font-size: 30px; text-transform: uppercase; }
          span { color: #ff0000; }
          .btn { display: inline-block; background: linear-gradient(135deg, #ff0000, #990000); color: white; text-decoration: none; padding: 15px 30px; border-radius: 12px; font-weight: bold; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>ACCESS <span>DENIED</span></h1>
          <p>Please use a Roblox executor to access this endpoint.</p>
          <a href="https://dsc.gg/yantorobloxhub" class="btn">JOIN DISCORD</a>
        </div>
      </body>
      </html>
    `);
  }
}

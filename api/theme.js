module.exports = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="YantoHUB - Premium Roblox Script Hub dengan fitur lengkap, keamanan terjamin, support semua device.">
    <title>YantoHUB | Premium Script Hub</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-deep: #030303;
            --bg-card: rgba(15, 15, 18, 0.75);
            --border-glass: rgba(255, 255, 255, 0.06);
            --border-hover: rgba(255, 0, 0, 0.35);
            --rgb-blue: #00d2ff;
            --rgb-red: #ff0000;
            --rgb-red-soft: #ff3333;
            --rgb-gold: #f59e0b;
            --discord-blue: #5865F2;
            --discord-blue-hover: #4752c4;
            --tiktok-color: #ff0050;
            --youtube-color: #ff0000;
            --text-muted: #71717a;
            --text-soft: #a1a1aa;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
        html { scroll-padding-top: 80px; }
        body { background-color: var(--bg-deep); color: #fff; overflow-x: hidden; line-height: 1.6; -webkit-font-smoothing: antialiased; }

        .bg-gradient {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: -4;
            background: linear-gradient(-45deg, #030303, #0f0404, #07070f, #030303);
            background-size: 400% 400%;
            animation: gradientShift 20s ease infinite;
        }
        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        .glow-overlay {
            position: fixed;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 100vw; height: 100vh;
            z-index: -3;
            background: radial-gradient(circle, rgba(255,0,0,0.12) 0%, transparent 65%);
            animation: glowPulse 6s ease-in-out infinite;
            pointer-events: none;
        }
        @keyframes glowPulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.9; }
        }
        #particles {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            z-index: -2;
            pointer-events: none;
            display: block;
        }
        .reveal { opacity: 0; transform: translateY(25px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; will-change: opacity, transform; }
        .reveal.active { opacity: 1; transform: translateY(0); }

        nav { display: flex; justify-content: space-between; align-items: center; padding: 14px 6%; background: rgba(3, 3, 3, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--border-glass); }
        .nav-logo { display: flex; align-items: center; gap: 11px; }
        .nav-logo img { width: 36px; height: 36px; border-radius: 8px; }
        .nav-menu { display: flex; gap: 28px; align-items: center; }
        .nav-menu a { color: var(--text-soft); text-decoration: none; font-size: 14px; font-weight: 600; transition: 0.2s; position: relative; }
        .nav-menu a:hover { color: #fff; }
        .nav-menu a::after { content: ""; position: absolute; bottom: -6px; left: 0; width: 0; height: 2px; background: var(--rgb-red); transition: 0.3s; }
        .nav-menu a:hover::after { width: 100%; }
        .rgb-text { background: linear-gradient(90deg, #ff0000, #ff7700, #ff00ea, #00d2ff, #ff0000); background-size: 300% 300%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: rgbFlow 5s linear infinite; font-weight: 800; letter-spacing: -0.5px; }
        @keyframes rgbFlow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }

        .btn-discord { display: inline-flex; align-items: center; gap: 8px; background: var(--discord-blue); color: #fff; padding: 9px 18px; border-radius: 11px; text-decoration: none; font-weight: 700; font-size: 13px; transition: 0.25s; box-shadow: 0 4px 15px rgba(88, 101, 242, 0.25); border: 1px solid rgba(255,255,255,0.08); white-space: nowrap; }
        .btn-discord:hover { background: var(--discord-blue-hover); transform: translateY(-2px); box-shadow: 0 8px 22px rgba(88, 101, 242, 0.45); }
        .btn-discord svg { width: 18px; height: 18px; fill: #fff; flex-shrink: 0; }

        .hero { text-align: center; padding: 90px 5% 50px; }
        .hero-badge { background: rgba(255,0,0,0.1); border: 1px solid rgba(255,0,0,0.2); padding: 6px 18px; border-radius: 100px; display: inline-block; font-size: 11px; font-weight: 800; color: var(--rgb-red-soft); margin-bottom: 22px; letter-spacing: 1.5px; }
        .hero h1 { font-size: clamp(48px, 10vw, 88px); margin-bottom: 18px; letter-spacing: -2.5px; line-height: 1.05; }
        .hero p { color: var(--text-soft); max-width: 720px; margin: 0 auto 40px; font-size: 17px; line-height: 1.65; }
        .stats-grid { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 70px; }
        .stat-card { background: var(--bg-card); border: 1px solid var(--border-glass); padding: 20px 36px; border-radius: 22px; min-width: 140px; text-align: center; backdrop-filter: blur(10px); transition: 0.3s; }
        .stat-card:hover { border-color: var(--border-hover); transform: translateY(-4px); }
        .stat-card h3 { color: var(--rgb-red); font-size: 30px; font-weight: 800; line-height: 1.1; }
        .stat-card p { font-size: 10.5px; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 4px; letter-spacing: 0.5px; }

        section { padding: 60px 6%; }
        .section-header { text-align: center; margin-bottom: 50px; }
        .section-header h2 { font-size: 36px; font-weight: 800; letter-spacing: -1px; margin-bottom: 10px; }
        .section-header p { color: var(--text-muted); font-size: 14px; max-width: 600px; margin: 0 auto; }

        .keunggulan-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; max-width: 1300px; margin: 0 auto; }
        .k-item { background: var(--bg-card); border: 1px solid var(--border-glass); padding: 30px; border-radius: 22px; transition: 0.3s; }
        .k-item:hover { border-color: var(--border-hover); background: rgba(20, 20, 24, 0.85); transform: translateY(-3px); }
        .k-icon { width: 50px; height: 50px; background: rgba(255,0,0,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
        .k-item h4 { margin-bottom: 12px; font-size: 17px; font-weight: 700; }
        .k-item p { color: var(--text-muted); font-size: 13.5px; line-height: 1.65; }

        .pricing-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 24px; max-width: 1150px; margin: 0 auto; }
        .p-card { background: var(--bg-card); border: 1px solid var(--border-glass); padding: 42px 32px; border-radius: 30px; transition: 0.35s; backdrop-filter: blur(15px); position: relative; overflow: hidden; }
        .p-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; }
        .p-card.basic::before { background: linear-gradient(90deg, transparent, var(--rgb-blue), transparent); }
        .p-card.premium::before { background: linear-gradient(90deg, transparent, var(--rgb-red), transparent); }
        .p-card.lifetime::before { background: linear-gradient(90deg, transparent, var(--rgb-gold), transparent); }
        .p-card.basic { border-color: rgba(0, 210, 255, 0.25); }
        .p-card.premium { border-color: rgba(255, 0, 0, 0.3); box-shadow: 0 0 40px rgba(255, 0, 0, 0.08); }
        .p-card.lifetime { border-color: rgba(245, 158, 11, 0.25); }
        .p-card:hover { transform: translateY(-10px); }
        .p-badge { position: absolute; top: 18px; right: 18px; background: var(--rgb-red); color: #fff; font-size: 10px; font-weight: 800; padding: 4px 12px; border-radius: 100px; letter-spacing: 1px; }
        .p-card h3 { font-size: 22px; margin-bottom: 10px; font-weight: 800; }
        .p-desc { color: var(--text-muted); font-size: 13px; margin-bottom: 22px; }
        .p-price { font-size: 40px; font-weight: 800; margin-bottom: 30px; line-height: 1.1; letter-spacing: -1.5px; }
        .p-price span { font-size: 14px; color: var(--text-muted); font-weight: 500; letter-spacing: 0; }
        .p-list { list-style: none; margin-bottom: 35px; }
        .p-list li { font-size: 13.5px; color: #d4d4d8; margin-bottom: 13px; display: flex; align-items: flex-start; gap: 11px; line-height: 1.5; }
        .p-list li::before { content: "✓"; color: var(--rgb-red); font-weight: 900; flex-shrink: 0; margin-top: 1px; }
        .p-btn { display: block; width: 100%; padding: 15px; text-align: center; border-radius: 16px; text-decoration: none; font-weight: 800; font-size: 13.5px; transition: 0.3s; letter-spacing: 0.3px; }
        .p-btn:hover { transform: scale(1.02); }
        .p-btn.b { background: var(--rgb-blue); color: #000; }
        .p-btn.r { background: var(--rgb-red); color: #fff; }
        .p-btn.g { background: var(--rgb-gold); color: #000; }

        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px; max-width: 1300px; margin: 0 auto; }
        .f-box { background: var(--bg-card); border: 1px solid var(--border-glass); padding: 26px; border-radius: 22px; transition: 0.3s; }
        .f-box:hover { border-color: var(--border-hover); }
        .f-box h4 { font-size: 16px; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; color: var(--rgb-red-soft); font-weight: 800; letter-spacing: 0.3px; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { background: rgba(255,255,255,0.04); padding: 6px 13px; border-radius: 9px; font-size: 11.5px; color: var(--text-soft); border: 1px solid var(--border-glass); transition: 0.2s; }
        .tag:hover { background: rgba(255,0,0,0.1); color: var(--rgb-red-soft); border-color: var(--border-hover); }

        footer { background: rgba(0,0,0,0.75); backdrop-filter: blur(16px); padding: 60px 6% 30px; border-top: 1px solid var(--border-glass); margin-top: 40px; }
        .f-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; margin-bottom: 40px; max-width: 1300px; margin-left: auto; margin-right: auto; }
        .f-col h4 { margin-bottom: 20px; font-size: 15px; font-weight: 700; }
        .f-col a { display: flex; align-items: center; gap: 8px; color: var(--text-muted); text-decoration: none; margin-bottom: 11px; font-size: 13.5px; transition: 0.2s; }
        .f-col a:hover { color: var(--rgb-red); transform: translateX(4px); }
        .f-col a svg { width: 16px; height: 16px; flex-shrink: 0; }
        .f-col a.tiktok:hover { color: var(--tiktok-color); }
        .f-col a.youtube:hover { color: var(--youtube-color); }
        .f-col a.discord:hover { color: var(--discord-blue); }
        .f-desc { color: var(--text-muted); font-size: 13.5px; line-height: 1.75; margin-top: 14px; max-width: 400px; }

        #musicToggle { position: fixed; bottom: 24px; right: 24px; z-index: 9999; background: var(--rgb-red); color: #fff; border: none; padding: 13px 20px; border-radius: 50px; cursor: pointer; font-weight: 800; font-size: 12.5px; font-family: inherit; box-shadow: 0 8px 25px rgba(255,0,0,0.35); transition: 0.3s; display: flex; align-items: center; gap: 7px; }
        #musicToggle:hover { transform: scale(1.06); box-shadow: 0 12px 32px rgba(255,0,0,0.55); }
        #musicToggle.on { background: #22c55e; box-shadow: 0 8px 25px rgba(34,197,94,0.35); }
        #musicToggle.loading { background: var(--rgb-gold); box-shadow: 0 8px 25px rgba(245,158,11,0.35); }

        @media (max-width: 900px) { .f-grid { grid-template-columns: 2fr 1fr 1fr; } }
        @media (max-width: 768px) {
            nav { padding: 12px 4%; }
            .nav-menu { display: none; }
            .nav-logo img { width: 32px; height: 32px; }
            .btn-discord span { display: none; }
            .btn-discord { padding: 9px 14px; }
            .hero { padding: 60px 5% 40px; }
            .hero h1 { font-size: 44px; }
            .hero p { font-size: 15px; }
            .stat-card { padding: 16px 26px; min-width: 120px; }
            .stat-card h3 { font-size: 26px; }
            section { padding: 45px 5%; }
            .section-header h2 { font-size: 28px; }
            .f-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
            .p-card { padding: 36px 26px; }
            .p-price { font-size: 34px; }
            #musicToggle { bottom: 14px; right: 14px; padding: 11px 16px; font-size: 11.5px; }
        }
        @media (max-width: 480px) {
            .hero h1 { font-size: 38px; }
            .stats-grid { gap: 10px; }
            .stat-card { padding: 14px 20px; min-width: 100px; }
            .stat-card h3 { font-size: 22px; }
            .stat-card p { font-size: 9.5px; }
            .f-grid { grid-template-columns: 1fr; gap: 25px; }
        }
    </style>
</head>
<body>
    <div class="bg-gradient"></div>
    <div class="glow-overlay"></div>
    <canvas id="particles"></canvas>

    <nav>
        <div class="nav-logo">
            <img src="https://raw.githubusercontent.com/YantoRoblox/Aset-logo/refs/heads/main/logo.png" alt="Logo">
            <div class="rgb-text" style="font-size: 18px;">YANTO HUB</div>
        </div>
        <div class="nav-menu">
            <a href="#beranda">Beranda</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#harga">Harga</a>
            <a href="#fitur">Fitur VIP</a>
            <a href="#games">Games</a>
        </div>
        <a href="https://dsc.gg/yantorobloxhub" class="btn-discord" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>JOIN DISCORD</span>
        </a>
    </nav>

    <header class="hero reveal" id="beranda">
        <div class="hero-badge">SCRIPT PREMIUM ROBLOX</div>
        <h1 class="rgb-text">YantoHUB</h1>
        <p>YantoHub script terbaik dengan fitur eksklusif, Support mobile Android & iOS, dan PC. Pembaruan rutin dengan kualitas premium.</p>

        <div class="stats-grid">
            <div class="stat-card"><h3>8+</h3><p>Supported Games</p></div>
            <div class="stat-card"><h3>60+</h3><p>VIP Features</p></div>
            <div class="stat-card"><h3>24/7</h3><p>Active Support</p></div>
            <div class="stat-card"><h3>100%</h3><p>Work Status</p></div>
        </div>
    </header>

    <section class="reveal" id="keunggulan">
        <div class="section-header">
            <h2>Keunggulan Script</h2>
            <p>Kenapa ribuan user mempercayakan script mereka kepada YantoHub</p>
        </div>
        <div class="keunggulan-grid">
            <div class="k-item">
                <div class="k-icon">⚡</div>
                <h4>Performa Tinggi</h4>
                <p>Script ringan dan smooth digunakan di berbagai device tanpa lag berlebihan saat dimainkan.</p>
            </div>
            <div class="k-item">
                <div class="k-icon">🛡️</div>
                <h4>Keamanan Terjamin</h4>
                <p>Script sangat aman digunakan dan selalu update agar tetap stabil di setiap versi Roblox terbaru.</p>
            </div>
            <div class="k-item">
                <div class="k-icon">✅</div>
                <h4>Mudah Digunakan</h4>
                <p>Tampilan modern, simple, dan support untuk pemula yang baru menggunakan script Roblox.</p>
            </div>
            <div class="k-item">
                <div class="k-icon">💎</div>
                <h4>Full Akses Script</h4>
                <p>Dapatkan semua fitur premium lengkap tanpa batasan penggunaan pada semua fitur yang tersedia.</p>
            </div>
            <div class="k-item">
                <div class="k-icon">🔄</div>
                <h4>Update Berkala</h4>
                <p>Kami terus memperbarui script untuk menjaga performa terbaik dan meminimalkan bug/error.</p>
            </div>
            <div class="k-item">
                <div class="k-icon">🎧</div>
                <h4>Support 24/7</h4>
                <p>Bantuan teknis aktif kapan saja melalui Discord dan komunitas resmi Yanto Hub.</p>
            </div>
        </div>
    </section>

    <section class="reveal" id="harga">
        <div class="section-header">
            <h2>Daftar Harga & Sistem</h2>
            <p>Pilih paket sesuai kebutuhan kamu, semua paket sudah termasuk update rutin</p>
        </div>
        <div class="pricing-container">
            <div class="p-card basic">
                <h3>Paket Basic</h3>
                <div class="p-desc">Cocok untuk pemula yang ingin coba fitur</div>
                <div class="p-price">Rp 20.000 <span>/ Bulan</span></div>
                <ul class="p-list">
                    <li>System: LOCK USERNAME</li>
                    <li>Bisa digunakan di semua Device</li>
                    <li>Batas ganti username: 1x/bulan</li>
                    <li>Update script terbaru</li>
                    <li>Support basic via Discord</li>
                </ul>
                <a href="https://dsc.gg/yantorobloxhub" class="p-btn b">Beli 30 Days</a>
            </div>

            <div class="p-card premium">
                <div class="p-badge">POPULER</div>
                <h3>Paket Premium</h3>
                <div class="p-desc">Pilihan favorit dengan prioritas support</div>
                <div class="p-price" style="color: var(--rgb-red);">Rp 40.000 <span>/ Bulan</span></div>
                <ul class="p-list">
                    <li>System: LOCK DEVICE</li>
                    <li>Ganti Code Device 1x/bulan</li>
                    <li>Username sepuasnya di device sama</li>
                    <li>Prioritas Support 24/7</li>
                    <li>Update script terbaru</li>
                    <li>Akses semua fitur VIP</li>
                </ul>
                <a href="https://dsc.gg/yantorobloxhub" class="p-btn r">Beli Premium</a>
            </div>

            <div class="p-card lifetime">
                <h3>Paket Permanen</h3>
                <div class="p-desc">Sekali bayar, akses selamanya</div>
                <div class="p-price" style="color: var(--rgb-gold);">Rp 100.000 <span>/ Lifetime</span></div>
                <ul class="p-list">
                    <li>Sekali bayar akses selamanya</li>
                    <li>Beli VIP 4x? Klaim GRATIS Permanen</li>
                    <li>Semua fitur VIP unlocked</li>
                    <li>Grup khusus buyer VIP</li>
                    <li>Prioritas update tertinggi</li>
                    <li>Support lifetime dari owner</li>
                </ul>
                <a href="https://dsc.gg/yantorobloxhub" class="p-btn g">Beli Lifetime</a>
            </div>
        </div>
    </section>

    <section class="reveal" id="fitur">
        <div class="section-header">
            <h2>Exclusive Features</h2>
            <p>60+ fitur premium yang tersedia di dalam YantoHub VIP</p>
        </div>
        <div class="features-grid">
            <div class="f-box">
                <h4>🚀 MOVEMENT</h4>
                <div class="tags">
                    <span class="tag">Fly</span><span class="tag">Walkspeed</span><span class="tag">Infinite Jump</span><span class="tag">Noclip</span><span class="tag">God Mode</span><span class="tag">Teleporter Player</span><span class="tag">FreeCamp</span>
                </div>
            </div>
            <div class="f-box">
                <h4>👁️ VISUAL DISPLAY</h4>
                <div class="tags">
                    <span class="tag">ESP Player</span><span class="tag">Full Bright</span><span class="tag">Hide Player</span><span class="tag">Hide Other Players</span><span class="tag">Freecam</span><span class="tag">6 Custom Skybox</span><span class="tag">Clear Day</span><span class="tag">Moonlight</span><span class="tag">Sunrise</span><span class="tag">Reset Lighting</span>
                </div>
            </div>
            <div class="f-box">
                <h4>🛠️ UTILITY TOOLS</h4>
                <div class="tags">
                    <span class="tag">Anti AFK</span><span class="tag">Bypass AFK</span><span class="tag">Potato Mode</span><span class="tag">FPS Boost</span><span class="tag">FPS Tag</span><span class="tag">Ping Tag</span><span class="tag">Custom Delay</span>
                </div>
            </div>
            <div class="f-box">
                <h4>🎭 FUN & INTERACTION</h4>
                <div class="tags">
                    <span class="tag">Animation</span><span class="tag">Animasi Karakter GUI</span><span class="tag">Change Name</span><span class="tag">Fake Donate</span><span class="tag">Bring Part</span><span class="tag">Bring Part Username</span><span class="tag">Play Music</span><span class="tag">Music Library</span><span class="tag">Random Playlist</span>
                </div>
            </div>
            <div class="f-box">
                <h4>🎯 COMBAT SYSTEM</h4>
                <div class="tags">
                    <span class="tag">Combat Master Logic</span><span class="tag">ESP Player</span><span class="tag">Aimbot V1 (Snap)</span><span class="tag">Aimbot V2 (Silent)</span><span class="tag">Aim Radius (FOV)</span><span class="tag">Show FOV Circle</span><span class="tag">Trigger Mode</span><span class="tag">Auto Lock</span><span class="tag">Crosshair (5 Style)</span><span class="tag">Crosshair Size</span>
                </div>
            </div>
            <div class="f-box">
                <h4>🛰️ SPECIAL SYSTEM</h4>
                <div class="tags">
                    <span class="tag">Auto Walk Record</span><span class="tag">CCTV Player</span><span class="tag">Orbit Player</span><span class="tag">Laser Map</span><span class="tag">Rusuh Sky Box</span><span class="tag">Backdoor Serverside</span><span class="tag">Spectator Rusuh</span><span class="tag">Fling All Player</span><span class="tag">3k Emote (No Visual)</span><span class="tag">Premium Emotes 3K++</span>
                </div>
            </div>
            <div class="f-box">
                <h4>👤 AVATAR TOOLS</h4>
                <div class="tags">
                    <span class="tag">Copy Avatar V1</span><span class="tag">Copy Avatar V2</span><span class="tag">Copy Avatar V3</span><span class="tag">Copy Avatar Katalog</span><span class="tag">Animasi Novisual</span>
                </div>
            </div>
            <div class="f-box">
                <h4>🎨 TITLE & PROFILE</h4>
                <div class="tags">
                    <span class="tag">Overhead Title</span><span class="tag">Preset Title</span><span class="tag">Custom Title</span><span class="tag">Fake Name</span><span class="tag">Fake Level</span><span class="tag">Streamer Mode</span><span class="tag">Custom Height</span>
                </div>
            </div>
            <div class="f-box">
                <h4>🎵 MUSIC SYSTEM</h4>
                <div class="tags">
                    <span class="tag">Music Library</span><span class="tag">Play Selected</span><span class="tag">Random Playlist</span><span class="tag">Stop Music</span><span class="tag">Volume Control</span><span class="tag">DJ Songs</span><span class="tag">Lofi Study</span><span class="tag">Kicau Mania</span>
                </div>
            </div>
            <div class="f-box">
                <h4>💎 ACCOUNT INFO</h4>
                <div class="tags">
                    <span class="tag">User Data Profile</span><span class="tag">Avatar Thumbnail</span><span class="tag">Account Age</span><span class="tag">Platform Info</span><span class="tag">Executor Info</span><span class="tag">VIP Status</span>
                </div>
            </div>
        </div>
    </section>

    <section class="reveal" id="games">
        <div class="section-header">
            <h2>Supported Games</h2>
            <p>Script yang tersedia dan sudah teruji di berbagai game populer</p>
        </div>
        <div class="features-grid">
            <div class="f-box">
                <h4>🎮 GAME LIBRARY</h4>
                <div class="tags">
                    <span class="tag">Violence District (VD)</span><span class="tag">Steal An Egg</span><span class="tag">Grow Garden 2 (Gag2)</span><span class="tag">Evade</span><span class="tag">Chameleon</span><span class="tag">+1 Health Per Click</span><span class="tag">Hyper Speed Runner</span><span class="tag">Tembakan Kepala FFA</span>
                </div>
            </div>
            <div class="f-box">
                <h4>🏔️ AUTO SUMMIT HUB</h4>
                <p style="color: var(--text-muted); font-size: 13.5px; line-height: 1.7; margin-bottom: 15px;">
                    70+ lokasi Auto Summit tersedia lengkap di dalam menu Yanto Hub VIP. Untuk daftar lengkap lokasi dan update terbaru, silakan cek langsung di Discord resmi kami.
                </p>
                <a href="https://dsc.gg/yantorobloxhub" class="p-btn r" style="display: inline-block; padding: 11px 24px; border-radius: 12px; text-decoration: none; font-weight: 800; font-size: 12.5px; width: auto;">Cek di Discord</a>
            </div>
            <div class="f-box">
                <h4>🎁 BONUS FITUR</h4>
                <div class="tags">
                    <span class="tag">Premium Emotes 3K++</span><span class="tag">Copy Avatar V1/V2/V3</span><span class="tag">Fake Donate V1/V2</span><span class="tag">Menu Title</span><span class="tag">Backdoor Serverside</span>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="f-grid">
            <div class="f-col">
                <h2 class="rgb-text" style="font-size: 24px;">YANTO HUB</h2>
                <p class="f-desc">Penyedia script premium Roblox terbaik dengan keamanan terjamin dan fitur paling lengkap di Indonesia. Dipercaya ribuan pengguna sejak lama.</p>
            </div>
            <div class="f-col">
                <h4>Navigasi</h4>
                <a href="#beranda">Beranda</a>
                <a href="#keunggulan">Keunggulan</a>
                <a href="#harga">Harga</a>
                <a href="#fitur">Fitur VIP</a>
                <a href="#games">Games</a>
            </div>
            <div class="f-col">
                <h4>Social Media</h4>
                <a href="https://dsc.gg/yantorobloxhub" target="_blank" rel="noopener" class="discord">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                    Discord Server
                </a>
                <a href="https://www.tiktok.com/@_yantohub?_r=1&_t=ZS-99sxvuOG1x6" target="_blank" rel="noopener" class="tiktok">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                    TikTok
                </a>
                <a href="https://youtube.com/@yantohub?si=fhKKWPTV3Yvji8UZ" target="_blank" rel="noopener" class="youtube">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube
                </a>
                <a href="https://chat.whatsapp.com/D7UP3NbIX3xBV499USQRzx" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp Group
                </a>
                <a href="https://saweria.co/yantoroblox" target="_blank" rel="noopener" style="color: var(--rgb-gold); font-weight: 700;">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    Donasi (Saweria)
                </a>
            </div>
        </div>
        <div style="text-align: center; color: #333; font-size: 11px; padding-top: 25px; border-top: 1px solid #111; max-width: 1300px; margin: 0 auto;">
            &copy; 2026 YantoHUB Team. All Rights Reserved.
        </div>
    </footer>

    <button id="musicToggle" title="Klik untuk putar musik">🔇 Music: OFF</button>

    <script>
        function handleReveal() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            for (let i = 0; i < reveals.length; i++) {
                const elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - 80) {
                    reveals[i].classList.add('active');
                }
            }
        }
        window.addEventListener('scroll', handleReveal, { passive: true });
        window.addEventListener('load', handleReveal);
        handleReveal();

        document.querySelectorAll('.nav-menu a, .f-col a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        const navHeight = document.querySelector('nav').offsetHeight;
                        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
                        window.scrollTo({ top: targetPos, behavior: 'smooth' });
                    }
                }
            });
        });

        (function() {
            const canvas = document.getElementById('particles');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let particles = [];
            let mouse = { x: null, y: null, radius: 180 };
            let animationId;
            let isRunning = true;
            let dpr = Math.min(window.devicePixelRatio || 1, 2);

            function resize() {
                dpr = Math.min(window.devicePixelRatio || 1, 2);
                const w = window.innerWidth;
                const h = window.innerHeight;
                canvas.width = w * dpr;
                canvas.height = h * dpr;
                canvas.style.width = w + 'px';
                canvas.style.height = h + 'px';
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
            resize();

            const isMobile = window.innerWidth < 768;
            const count = isMobile ? 60 : 140;
            const connectDist = isMobile ? 130 : 160;
            const speed = isMobile ? 0.35 : 0.5;

            function initParticles() {
                const w = window.innerWidth;
                const h = window.innerHeight;
                particles = [];
                for (let i = 0; i < count; i++) {
                    particles.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        vx: (Math.random() - 0.5) * speed,
                        vy: (Math.random() - 0.5) * speed
                    });
                }
            }
            initParticles();

            let mouseMoveTimer;
            window.addEventListener('resize', () => {
                resize();
                initParticles();
            }, { passive: true });

            window.addEventListener('mousemove', (e) => {
                clearTimeout(mouseMoveTimer);
                mouse.x = e.clientX;
                mouse.y = e.clientY;
                mouseMoveTimer = setTimeout(() => {
                    mouse.x = null;
                    mouse.y = null;
                }, 500);
            }, { passive: true });

            function animate() {
                if (!isRunning) return;
                const w = window.innerWidth;
                const h = window.innerHeight;
                ctx.clearRect(0, 0, w, h);

                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0) { p.x = 0; p.vx *= -1; }
                    else if (p.x > w) { p.x = w; p.vx *= -1; }
                    if (p.y < 0) { p.y = 0; p.vy *= -1; }
                    else if (p.y > h) { p.y = h; p.vy *= -1; }
                }

                ctx.lineWidth = 1;

                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const distSq = dx * dx + dy * dy;
                        if (distSq < connectDist * connectDist) {
                            const dist = Math.sqrt(distSq);
                            const alpha = (1 - dist / connectDist) * 0.75;
                            ctx.strokeStyle = 'rgba(255, 30, 60, ' + alpha + ')';
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }

                    if (mouse.x !== null) {
                        const dx = p.x - mouse.x;
                        const dy = p.y - mouse.y;
                        const distSq = dx * dx + dy * dy;
                        if (distSq < mouse.radius * mouse.radius) {
                            const dist = Math.sqrt(distSq);
                            const alpha = (1 - dist / mouse.radius) * 0.9;
                            ctx.strokeStyle = 'rgba(255, 80, 120, ' + alpha + ')';
                            ctx.lineWidth = 1.4;
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(mouse.x, mouse.y);
                            ctx.stroke();
                            ctx.lineWidth = 1;
                        }
                    }
                }
                animationId = requestAnimationFrame(animate);
            }
            animate();

            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    isRunning = false;
                    cancelAnimationFrame(animationId);
                } else {
                    isRunning = true;
                    animate();
                }
            });
        })();

        const musicToggle = document.getElementById('musicToggle');
        const MusicEngine = (function() {
            let mode = null;
            let audioEl = null;
            let audioCtx = null;
            let masterGain = null;
            let isRunning = false;
            let schedulerTimer = null;
            let currentStep = 0;

            const MUSIC_URLS = [
                "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=cyberpunk-2099-ambient-120230.mp3",
                "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
            ];

            const chords = [
                [261.63, 329.63, 392.00],
                [196.00, 246.94, 293.66],
                [220.00, 261.63, 329.63],
                [174.61, 220.00, 261.63]
            ];
            const melody = [
                523.25, 587.33, 659.25, 587.33,
                523.25, 493.88, 440.00, 493.88,
                523.25, 659.25, 783.99, 659.25,
                587.33, 523.25, 493.88, 523.25
            ];

            function tryLoadUrl(index) {
                return new Promise((resolve) => {
                    if (index >= MUSIC_URLS.length) return resolve(false);
                    const el = new Audio();
                    el.src = MUSIC_URLS[index];
                    el.loop = true;
                    el.volume = 0.35;
                    el.preload = 'auto';
                    const timeout = setTimeout(() => { el.src = ''; resolve(false); }, 4000);
                    el.addEventListener('canplaythrough', () => {
                        clearTimeout(timeout);
                        audioEl = el;
                        resolve(true);
                    }, { once: true });
                    el.addEventListener('error', () => {
                        clearTimeout(timeout);
                        tryLoadUrl(index + 1).then(resolve);
                    }, { once: true });
                });
            }

            function ensureCtx() {
                if (!audioCtx) {
                    try {
                        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                        masterGain = audioCtx.createGain();
                        masterGain.gain.value = 0.0;
                        masterGain.connect(audioCtx.destination);
                    } catch (e) { return false; }
                }
                if (audioCtx.state === 'suspended') audioCtx.resume();
                return true;
            }

            function playNote(freq, duration, type, volume, startTime) {
                if (!audioCtx) return;
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                const filter = audioCtx.createBiquadFilter();
                osc.type = type || 'sine';
                osc.frequency.value = freq;
                filter.type = 'lowpass';
                filter.frequency.value = 2200;
                filter.Q.value = 1;
                const t = startTime || audioCtx.currentTime;
                gain.gain.setValueAtTime(0, t);
                gain.gain.linearRampToValueAtTime(volume || 0.1, t + 0.03);
                gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(masterGain);
                osc.start(t);
                osc.stop(t + duration + 0.05);
            }

            function scheduleStep() {
                if (!isRunning || mode !== 'procedural' || !audioCtx) return;
                const t = audioCtx.currentTime + 0.05;
                const step = currentStep % 16;
                const chordIdx = Math.floor(currentStep / 4) % chords.length;
                const chord = chords[chordIdx];
                if (step % 4 === 0) {
                    chord.forEach(f => playNote(f, 1.2, 'sine', 0.05, t));
                    chord.forEach(f => playNote(f * 2, 0.9, 'triangle', 0.018, t));
                }
                const melNote = melody[currentStep % melody.length];
                playNote(melNote, 0.35, 'triangle', 0.045, t);
                currentStep++;
                schedulerTimer = setTimeout(scheduleStep, 240);
            }

            return {
                start: async function() {
                    if (isRunning) return { ok: true };
                    const urlOk = await tryLoadUrl(0);
                    if (urlOk && audioEl) {
                        try {
                            audioEl.currentTime = 0;
                            await audioEl.play();
                            isRunning = true;
                            mode = 'url';
                            return { ok: true };
                        } catch (e) {}
                    }
                    if (!ensureCtx()) return { ok: false };
                    isRunning = true;
                    mode = 'procedural';
                    currentStep = 0;
                    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
                    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
                    masterGain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 1.0);
                    scheduleStep();
                    return { ok: true };
                },
                stop: function() {
                    if (!isRunning) return;
                    isRunning = false;
                    if (mode === 'url' && audioEl) audioEl.pause();
                    if (mode === 'procedural') {
                        if (schedulerTimer) { clearTimeout(schedulerTimer); schedulerTimer = null; }
                        if (masterGain && audioCtx) {
                            masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
                            masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
                            masterGain.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.4);
                        }
                    }
                },
                isPlaying: () => isRunning
            };
        })();

        musicToggle.addEventListener('click', async () => {
            if (MusicEngine.isPlaying()) {
                MusicEngine.stop();
                musicToggle.textContent = '🔇 Music: OFF';
                musicToggle.classList.remove('on', 'loading');
            } else {
                musicToggle.textContent = '⏳ Loading...';
                musicToggle.classList.add('loading');
                const result = await MusicEngine.start();
                musicToggle.classList.remove('loading');
                if (result.ok) {
                    musicToggle.textContent = '🔊 Music: ON';
                    musicToggle.classList.add('on');
                } else {
                    musicToggle.textContent = '⚠️ Audio Error';
                    setTimeout(() => { musicToggle.textContent = '🔇 Music: OFF'; }, 2000);
                }
            }
        });

        let clickCtx = null;
        function playClickSound() {
            try {
                if (!clickCtx) clickCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (clickCtx.state === 'suspended') clickCtx.resume();
                const osc = clickCtx.createOscillator();
                const gain = clickCtx.createGain();
                osc.connect(gain);
                gain.connect(clickCtx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, clickCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(400, clickCtx.currentTime + 0.05);
                gain.gain.setValueAtTime(0.06, clickCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, clickCtx.currentTime + 0.08);
                osc.start(clickCtx.currentTime);
                osc.stop(clickCtx.currentTime + 0.08);
            } catch (e) {}
        }
        document.querySelectorAll('a, button, .tag, .p-btn').forEach(el => {
            el.addEventListener('click', playClickSound);
        });
    </script>
</body>
</html>
</html>`;

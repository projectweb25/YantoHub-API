module.exports = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YantoHUB | Premium Script Hub</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-deep: #030303;
            --border-glass: rgba(255, 255, 255, 0.05);
            --rgb-blue: #00d2ff;
            --rgb-red: #ff0000;
            --rgb-gold: #f59e0b;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-deep);
            color: #fff;
            overflow-x: hidden;
        }

        .fixed-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background: radial-gradient(circle at center, #0f0505 0%, #030303 100%);
        }

        .centered-logo-bg {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70%;
            max-width: 500px;
            opacity: 0.1;
            filter: blur(40px);
            z-index: -1;
            pointer-events: none;
        }

        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 8%;
            background: rgba(3, 3, 3, 0.9);
            backdrop-filter: blur(20px);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid var(--border-glass);
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .nav-logo img {
            width: 38px;
            height: 38px;
            border-radius: 8px;
        }

        .rgb-text {
            background: linear-gradient(90deg, #ff0000, #ff7700, #ff00ea, #00d2ff, #ff0000);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: rgbFlow 4s linear infinite;
            font-weight: 800;
        }

        @keyframes rgbFlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
        }

        .btn-discord {
            background: #ff0000;
            color: #fff;
            padding: 9px 20px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 13px;
        }

        .hero {
            text-align: center;
            padding: 100px 5% 60px;
        }

        .hero h1 { font-size: clamp(55px, 11vw, 90px); margin-bottom: 20px; letter-spacing: -2px; }
        .hero p { color: #a1a1aa; max-width: 800px; margin: 0 auto 40px; font-size: 18px; line-height: 1.6; }

        .stats-grid { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-bottom: 80px; }
        .stat-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 22px 40px; border-radius: 24px; min-width: 150px; text-align: center; backdrop-filter: blur(10px); }
        .stat-card h3 { color: #ff0000; font-size: 32px; font-weight: 800; }
        .stat-card p { font-size: 11px; color: #71717a; text-transform: uppercase; font-weight: 700; margin-top: 5px; }

        .section-header { text-align: center; margin-bottom: 60px; }
        .section-header h2 { font-size: 38px; font-weight: 800; }

        .pricing-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; padding: 0 8% 100px; }
        .p-card { background: rgba(10, 10, 10, 0.8); border: 1px solid var(--border-glass); padding: 50px 35px; border-radius: 35px; transition: 0.4s; backdrop-filter: blur(15px); }
        
        .p-card.basic { border: 1.5px solid var(--rgb-blue); box-shadow: 0 0 25px rgba(0, 210, 255, 0.1); }
        .p-card.premium { border: 1.5px solid var(--rgb-red); box-shadow: 0 0 25px rgba(255, 0, 0, 0.15); }
        .p-card.lifetime { border: 1.5px solid var(--rgb-gold); box-shadow: 0 0 25px rgba(245, 158, 11, 0.1); }

        .p-card:hover { transform: translateY(-15px); }
        .p-card h3 { font-size: 24px; margin-bottom: 12px; }
        .p-price { font-size: 42px; font-weight: 800; margin-bottom: 35px; }
        .p-price span { font-size: 15px; color: #71717a; font-weight: 400; }

        .p-list { list-style: none; margin-bottom: 40px; }
        .p-list li { font-size: 14px; color: #d4d4d8; margin-bottom: 15px; display: flex; align-items: center; gap: 12px; }
        .p-list li::before { content: "✔"; color: #ff0000; font-weight: 900; }

        .p-btn { display: block; width: 100%; padding: 16px; text-align: center; border-radius: 18px; text-decoration: none; font-weight: 800; font-size: 14px; transition: 0.3s; }
        .p-btn.b { background: var(--rgb-blue); color: #000; }
        .p-btn.r { background: var(--rgb-red); color: #fff; }
        .p-btn.g { background: var(--rgb-gold); color: #000; }

        .keunggulan-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 0 8% 100px; }
        .k-item { background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); padding: 35px; border-radius: 28px; }
        .k-icon { width: 55px; height: 55px; background: rgba(255,0,0,0.1); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 26px; margin-bottom: 25px; color: #ff0000; }
        .k-item h4 { margin-bottom: 15px; font-size: 20px; font-weight: 700; }
        .k-item p { color: #71717a; font-size: 14px; line-height: 1.7; }

        .hub-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; padding: 0 8% 100px; }
        .hub-box { background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 30px; border-radius: 25px; }
        .hub-box h4 { font-size: 18px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; color: #ef4444; font-weight: 800; }
        .tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .tag { background: rgba(255,255,255,0.05); padding: 7px 15px; border-radius: 10px; font-size: 12px; color: #a1a1aa; border: 1px solid var(--border-glass); }

        .scripts-wrapper { padding: 0 8% 100px; }
        .s-item { background: #080808; border: 1px solid var(--border-glass); padding: 30px; border-radius: 25px; margin-bottom: 20px; }
        .code-view { background: #000; padding: 22px; border-radius: 15px; font-family: monospace; font-size: 13px; color: #ff0000; margin: 20px 0; border: 1px solid #1a1a1a; overflow-x: auto; }
        .copy-btn { background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 12px 28px; border-radius: 12px; cursor: pointer; font-weight: 700; transition: 0.2s; }
        .copy-btn:hover { background: #222; }

        footer { background: #000; padding: 80px 8% 40px; border-top: 1px solid var(--border-glass); }
        .f-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px; margin-bottom: 60px; }
        .f-col h4 { margin-bottom: 25px; font-size: 17px; }
        .f-col a { display: block; color: #71717a; text-decoration: none; margin-bottom: 12px; font-size: 14px; transition: 0.2s; }
        .f-col a:hover { color: #ff0000; }

        #toast { position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%); background: #ff0000; color: #fff; padding: 12px 35px; border-radius: 50px; font-size: 14px; font-weight: 800; display: none; z-index: 2000; box-shadow: 0 10px 30px rgba(255,0,0,0.4); }

        @media (max-width: 768px) { .f-grid { grid-template-columns: 1fr; } .hero h1 { font-size: 50px; } .pricing-container { padding: 0 5% 100px; } }
    </style>
</head>
<body>

    <div class="fixed-bg"></div>
    <img src="https://raw.githubusercontent.com/YantoRoblox/Aset-logo/refs/heads/main/logo.png" class="centered-logo-bg">

    <nav>
        <div class="nav-logo">
            <img src="https://raw.githubusercontent.com/YantoRoblox/Aset-logo/refs/heads/main/logo.png" alt="Logo">
            <div class="rgb-text" style="font-size: 19px;">YANTO HUB</div>
        </div>
        <a href="https://dsc.gg/yantorobloxhub" class="btn-discord">JOIN DISCORD</a>
    </nav>

    <header class="hero reveal">
        <div style="background: rgba(255,0,0,0.1); border: 1px solid rgba(255,0,0,0.2); padding: 6px 18px; border-radius: 100px; display: inline-block; font-size: 11px; font-weight: 800; color: #ff3333; margin-bottom: 25px; letter-spacing: 1.5px;">SCRIPT PREMIUM ROBLOX</div>
        <h1 class="rgb-text">YantoHUB</h1>
        <p>YantoHub skrip terbaik dengan fitur eksklusif, Support mobile Android & Ios📱, dan pc💻, pembaruan rutin.</p>
        
        <div class="stats-grid">
            <div class="stat-card"><h3>3+</h3><p>Free Scripts</p></div>
            <div class="stat-card"><h3>40+</h3><p>VIP Features</p></div>
            <div class="stat-card"><h3>24/7</h3><p>Active Support</p></div>
            <div class="stat-card"><h3>100%</h3><p>Work Status</p></div>
        </div>
    </header>

    <section class="section-header reveal">
        <h2>Keunggulan Script</h2>
    </section>

    <section class="keunggulan-grid reveal">
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
            <p>Kami terus memperbarui script untuk menjaga performa terbaik dan meminimalisir bug/error.</p>
        </div>
        <div class="k-item">
            <div class="k-icon">🎧</div>
            <h4>Support 24/7</h4>
            <p>Bantuan teknis aktif kapan saja melalui Discord dan komunitas resmi Yanto Hub.</p>
        </div>
    </section>

    <section class="section-header reveal">
        <h2>Daftar Harga & Sistem</h2>
    </section>

    <section class="pricing-container reveal">
        <div class="p-card basic">
            <h3>Paket Basic</h3>
            <div class="p-price">Rp 25.000 <span>/ Bulan</span></div>
            <ul class="p-list">
                <li>System: LOCK USERNAME</li>
                <li>Bisa digunakan di semua Device</li>
                <li>Batas ganti username: 1x/bulan</li>
                <li>Update script terbaru</li>
            </ul>
            <a href="https://dsc.gg/yantorobloxhub" class="p-btn b">Beli 30 Days</a>
        </div>

        <div class="p-card premium">
            <h3>Paket Premium</h3>
            <div class="p-price" style="color: #ff0000;">Rp 50.000 <span>/ Bulan</span></div>
            <ul class="p-list">
                <li>System: LOCK DEVICE</li>
                <li>Ganti Code Device 1x/bulan</li>
                <li>Username sepuasnya di device sama</li>
                <li>Prioritas Support 24/7</li>
                <li>Update script terbaru</li>
            </ul>
            <a href="https://dsc.gg/yantorobloxhub" class="p-btn r">Beli Premium</a>
        </div>

        <div class="p-card lifetime">
            <h3>Paket Permanen</h3>
            <div class="p-price">Rp 150.000 <span>/ Lifetime</span></div>
            <ul class="p-list">
                <li>Sekali bayar akses selamanya!</li>
                <li>Beli VIP 4x? Klaim GRATIS Permanen</li>
                <li>Semua fitur VIP unlocked</li>
                <li>Grup khusus buyer VIP</li>
            </ul>
            <a href="https://dsc.gg/yantorobloxhub" class="p-btn g">Beli Lifetime</a>
        </div>
    </section>

    <section class="section-header reveal">
        <h2>Exclusive Features</h2>
    </section>

    <section class="hub-container reveal">
        <div class="hub-box">
            <h4>🚀 MOVEMENT</h4>
            <div class="tags">
                <span class="tag">Fly</span><span class="tag">Walkspeed</span><span class="tag">Infinite Jump</span><span class="tag">Noclip</span><span class="tag">God Mode</span>
            </div>
        </div>
        <div class="hub-box">
            <h4>👁️ VISUAL DISPLAY</h4>
            <div class="tags">
                <span class="tag">ESP Player</span><span class="tag">Full Bright</span><span class="tag">Hide Player</span><span class="tag">Sky Box</span><span class="tag">Freecam</span>
            </div>
        </div>
        <div class="hub-box">
            <h4>🛠️ UTILITY TOOLS</h4>
            <div class="tags">
                <span class="tag">Anti AFK</span><span class="tag">Copy Avatar</span><span class="tag">FPS Boost</span><span class="tag">Potato Mode</span>
            </div>
        </div>
        <div class="hub-box">
            <h4>🎭 FUN & INTERACTION</h4>
            <div class="tags">
                <span class="tag">Animation</span><span class="tag">Change Name</span><span class="tag">Fake Donate V1/V2</span><span class="tag">Bring Part</span><span class="tag">Play Music</span>
            </div>
        </div>
        <div class="hub-box">
            <h4>🛰️ SPECIAL SYSTEM</h4>
            <div class="tags">
                <span class="tag">Auto Walk Record</span><span class="tag">Teleport</span><span class="tag">CCTV</span><span class="tag">Laser Map</span><span class="tag">3k Emote (No Visual)</span><span class="tag">Menu Title (Owner/Admin)</span>
            </div>
        </div>
    </section>

    <section class="section-header reveal">
        <h2>Free Scripts</h2>
    </section>

    <section class="scripts-wrapper reveal">
        <div class="s-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="color: #ff0000; font-size: 18px; font-weight: 800;">Script Mount & Rusuh</h4>
                <span style="color: #22c55e; font-size: 11px; font-weight: 900;">ACTIVE ✅</span>
            </div>
            <div class="code-view" id="sc1">loadstring(game:HttpGet("https://yantohub.my.id/free-yanto"))()</div>
            <button class="copy-btn" onclick="copy('sc1')">Copy Script</button>
        </div>

        <div class="s-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="color: #ff0000; font-size: 18px; font-weight: 800;">+1 Health Per Click</h4>
                <span style="color: #22c55e; font-size: 11px; font-weight: 900;">ACTIVE ✅</span>
            </div>
            <div class="code-view" id="sc2">loadstring(game:HttpGet("https://raw.githubusercontent.com/YantoRoblox/YantoYRHUB/refs/heads/main/%2B1HEALTHPERCLICK"))()</div>
            <button class="copy-btn" onclick="copy('sc2')">Copy Script</button>
        </div>

        <div class="s-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="color: #ff0000; font-size: 18px; font-weight: 800;">Hyper Speed Runner</h4>
                <span style="color: #22c55e; font-size: 11px; font-weight: 900;">ACTIVE ✅</span>
            </div>
            <div class="code-view" id="sc3">loadstring(game:HttpGet("https://raw.githubusercontent.com/YantoRoblox/YantoYRHUB/refs/heads/main/HyperSpeedRunner"))()</div>
            <button class="copy-btn" onclick="copy('sc3')">Copy Script</button>
        </div>
    </section>

    <footer>
        <div class="f-grid reveal">
            <div class="f-col">
                <h2 class="rgb-text" style="font-size: 26px;">YANTO HUB</h2>
                <p style="color: #71717a; font-size: 14px; line-height: 1.8; margin-top: 15px;">Penyedia script premium Roblox terbaik dengan keamanan terjamin dan fitur paling lengkap di Indonesia.</p>
            </div>
            <div class="f-col">
                <h4>Navigasi</h4>
                <a href="#">Beranda</a>
                <a href="#">Fitur VIP</a>
                <a href="https://saweria.co/yantoroblox" target="_blank" style="color: #f59e0b; font-weight: 700;">Donasi (Saweria)</a>
            </div>
            <div class="f-col">
                <h4>Social</h4>
                <a href="https://dsc.gg/yantorobloxhub">Discord Server</a>
                <a href="https://chat.whatsapp.com/D7UP3NbIX3xBV499USQRzx" target="_blank">WhatsApp Group</a>
            </div>
        </div>
        <div style="text-align: center; color: #333; font-size: 11px; padding-top: 30px; border-top: 1px solid #111;">
            &copy; 2026 YantoHUB Team. All Rights Reserved.
        </div>
    </footer>

    <div id="toast">Berhasil disalin!</div>

    <script>
        function copy(id) {
            const text = document.getElementById(id).innerText;
            navigator.clipboard.writeText(text).then(() => {
                const toast = document.getElementById('toast');
                toast.style.display = 'block';
                setTimeout(() => { toast.style.display = 'none'; }, 2000);
            });
        }

        function handleReveal() {
            const reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }

        window.addEventListener('scroll', handleReveal);
        window.addEventListener('load', handleReveal);
        handleReveal();
    </script>
</body>
</html>
</html>`;

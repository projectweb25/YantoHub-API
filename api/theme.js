module.exports = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>YANTO HUB</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{
background:#050505;
color:white;
overflow-x:hidden;
position:relative;
}


#particles{
position:fixed;
width:100%;
height:100%;
top:0;
left:0;
z-index:-2;
overflow:hidden;
pointer-events:none;
}

.particle{
position:absolute;
width:4px;
height:4px;
background:#ff1f1f;
border-radius:50%;
opacity:0.5;
animation:float 15s linear infinite;
}

@keyframes float{
0%{
transform:translateY(100vh) scale(0);
opacity:0;
}
50%{
opacity:0.8;
}
100%{
transform:translateY(-120px) scale(1);
opacity:0;
}
}

body::before{
content:"";
position:fixed;
width:500px;
height:500px;
background:rgba(255,0,0,0.13);
filter:blur(160px);
top:-200px;
left:-200px;
z-index:-1;
}

body::after{
content:"";
position:fixed;
width:450px;
height:450px;
background:rgba(120,0,0,0.18);
filter:blur(160px);
bottom:-200px;
right:-200px;
z-index:-1;
}


.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 22px;
background:rgba(0,0,0,0.82);
backdrop-filter:blur(12px);
border-bottom:1px solid rgba(255,255,255,0.05);
position:sticky;
top:0;
z-index:999;
animation:topFade 1s ease;
}

.logo{
display:flex;
align-items:center;
gap:14px;
}

.logo-box{
width:58px;
height:58px;
border-radius:18px;
background:linear-gradient(135deg,#ff0000,#5c0000);
display:flex;
align-items:center;
justify-content:center;
font-size:22px;
font-weight:800;
box-shadow:0 0 30px rgba(255,0,0,0.4);
}

.logo-text h1{
font-size:24px;
font-weight:800;
color:#ff3c3c;
}

.logo-text p{
font-size:12px;
color:#999;
}

.discord-btn{
text-decoration:none;
padding:14px 22px;
border-radius:18px;
background:linear-gradient(90deg,#ff0000,#700000);
color:white;
font-weight:700;
transition:0.3s;
box-shadow:0 0 20px rgba(255,0,0,0.2);
}

.discord-btn:hover{
transform:translateY(-4px);
box-shadow:0 0 25px rgba(255,0,0,0.4);
}


.container{
padding:30px 18px 80px;
max-width:1280px;
margin:auto;
}


.hero{
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.06);
padding:45px;
border-radius:35px;
position:relative;
overflow:hidden;
margin-bottom:35px;
}

.hero::before{
content:"";
position:absolute;
width:300px;
height:300px;
background:rgba(255,0,0,0.15);
border-radius:50%;
right:-100px;
top:-100px;
}

.hero h2{
font-size:60px;
font-weight:800;
color:#ff3b3b;
margin-bottom:14px;
}

.hero p{
max-width:700px;
line-height:2;
color:#ccc;
font-size:15px;
}

.hero-buttons{
display:flex;
gap:15px;
margin-top:28px;
flex-wrap:wrap;
}

.hero-buttons a{
text-decoration:none;
padding:15px 25px;
border-radius:18px;
font-weight:700;
transition:0.3s;
}

.primary-btn{
background:linear-gradient(90deg,#ff0000,#700000);
color:white;
}

.secondary-btn{
background:#111;
border:1px solid rgba(255,255,255,0.08);
color:white;
}

.hero-buttons a:hover{
transform:translateY(-5px);
}


.stats-box{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:18px;
margin-top:35px;
}

.stat-card{
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.06);
padding:24px;
border-radius:25px;
text-align:center;
transition:0.3s;
}

.stat-card:hover{
transform:translateY(-6px);
border-color:rgba(255,0,0,0.3);
box-shadow:0 0 25px rgba(255,0,0,0.15);
}

.stat-card h3{
font-size:38px;
font-weight:800;
color:#ff4040;
margin-bottom:10px;
}

.stat-card p{
font-size:13px;
color:#bbb;
}


.feature-section{
margin-top:50px;
}

.feature-title{
text-align:center;
font-size:48px;
font-weight:800;
margin-bottom:10px;
}

.feature-sub{
text-align:center;
color:#aaa;
max-width:700px;
margin:auto;
line-height:1.8;
margin-bottom:40px;
}

.feature-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:22px;
}

.feature-card{
background:linear-gradient(180deg,#071020,#040811);
border:1px solid rgba(255,255,255,0.08);
padding:35px;
border-radius:26px;
transition:0.3s;
}

.feature-card:hover{
transform:translateY(-8px);
border-color:rgba(255,0,0,0.3);
box-shadow:0 0 30px rgba(255,0,0,0.12);
}

.feature-icon{
width:65px;
height:65px;
border-radius:18px;
background:rgba(255,255,255,0.06);
display:flex;
justify-content:center;
align-items:center;
font-size:28px;
margin-bottom:22px;
}

.feature-card h3{
font-size:32px;
margin-bottom:14px;
}

.feature-card p{
color:#aaa;
line-height:1.9;
}


.section-title{
margin:55px 0 22px;
font-size:34px;
font-weight:800;
color:#ff4040;
}


.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
gap:22px;
align-items:stretch;
}

.card{
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.06);
padding:24px;
border-radius:28px;
display:flex;
flex-direction:column;
justify-content:space-between;
transition:0.3s;
}

.card:hover{
transform:translateY(-8px);
border-color:rgba(255,0,0,0.3);
box-shadow:0 0 35px rgba(255,0,0,0.14);
}

.badge{
display:inline-block;
padding:8px 15px;
border-radius:999px;
background:rgba(255,0,0,0.13);
color:#ff5b5b;
font-size:12px;
margin-bottom:15px;
border:1px solid rgba(255,0,0,0.2);
}

.card h3{
font-size:28px;
font-weight:800;
margin-bottom:15px;
}

.script-box{
background:#090909;
padding:18px;
border-radius:18px;
font-size:12px;
line-height:1.9;
border:1px solid rgba(255,255,255,0.05);
margin-bottom:18px;
overflow:auto;
font-family:monospace;
color:#ddd;
min-height:85px;
}

.info{
font-size:14px;
line-height:2;
color:#ccc;
margin-bottom:18px;
}

.copy-btn{
width:100%;
padding:15px;
border:none;
border-radius:18px;
background:linear-gradient(90deg,#ff0000,#700000);
color:white;
font-weight:800;
cursor:pointer;
transition:0.3s;
}

.copy-btn:hover{
transform:scale(1.03);
}


.big-box{
margin-top:35px;
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.06);
padding:32px;
border-radius:30px;
}

.big-box h3{
font-size:32px;
font-weight:800;
color:#ff4040;
margin-bottom:20px;
}

.big-box p{
white-space:pre-line;
line-height:2;
font-size:15px;
color:#ddd;
}


.footer{
margin-top:60px;
padding:45px 20px;
border-top:1px solid rgba(255,255,255,0.05);

display:grid;
grid-template-columns:2fr 1fr 1fr;

gap:40px;
align-items:start;
}

.footer h2{
font-size:42px;
margin-bottom:14px;
line-height:1;
}

.footer p{
color:#aaa;
line-height:1.9;
}

.footer-links h3{
margin-bottom:18px;
}

.footer-links a{
display:block;
margin-bottom:12px;
color:#aaa;
text-decoration:none;
transition:0.2s;
}

.footer-links a:hover{
color:#ff4040;
}

.bottom-footer{
border-top:1px solid rgba(255,255,255,0.05);
padding:22px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
gap:15px;
color:#777;
font-size:14px;
}


#toast{
position:fixed;
bottom:20px;
right:20px;
background:#111;
border:1px solid rgba(255,0,0,0.2);
padding:14px 18px;
border-radius:14px;
display:none;
color:#ff5050;
font-weight:700;
z-index:9999;
}


.reveal{
opacity:0;
transform:translateY(60px);
transition:1s ease;
}

.reveal.active{
opacity:1;
transform:translateY(0);
}


@keyframes topFade{
0%{
opacity:0;
transform:translateY(-60px);
}
100%{
opacity:1;
transform:translateY(0);
}
}


@media(max-width:768px){

.hero{
padding:28px;
}

.hero h2{
font-size:42px;
}

.feature-title{
font-size:36px;
}

.card h3{
font-size:24px;
}

.discord-btn{
padding:10px 14px;
font-size:13px;
}

.footer{
grid-template-columns:1fr;
gap:25px;
padding:40px 10px;
}

}

</style>
</head>
<body>

<div id="particles"></div>

<div class="navbar">

<div class="logo">

<div class="logo-box">
YR
</div>

<div class="logo-text">
<h1>YANTO HUB</h1>
<p>Scripts Premium Roblox</p>
</div>

</div>

<a class="discord-btn" href="https://dsc.gg/yantorobloxhub" target="_blank">
JOIN DISCORD
</a>

</div>


<div class="container">


<div class="hero reveal">

<h2>YANTO ROBLOX</h2>

<p>
Script Premium Roblox dengan fitur lengkap, auto summit, utility.
</p>

<div class="hero-buttons">

<a href="https://chat.whatsapp.com/D7UP3NbIX3xBV499USQRzx" class="primary-btn">
JOIN COMMUNITY
</a>

<a href="#scripts" class="secondary-btn">
VIEW SCRIPTS
</a>

</div>

<div class="stats-box">

<div class="stat-card">
<h3>3+</h3>
<p>FREE SCRIPTS</p>
</div>

<div class="stat-card">
<h3>40+</h3>
<p>VIP FEATURES</p>
</div>

<div class="stat-card">
<h3>24/7</h3>
<p>SUPPORT ACTIVE</p>
</div>

<div class="stat-card">
<h3>100%</h3>
<p>WORK STATUS</p>
</div>

</div>

</div>


<div class="feature-section reveal">

<h2 class="feature-title">
Keunggulan Script
</h2>

<p class="feature-sub">
Berbagai keuntungan yang kamu dapatkan saat menggunakan
dan mengakses script premium di platform ini.
</p>

<div class="feature-grid">

<div class="feature-card">
<div class="feature-icon">⚡</div>
<h3>Performa Tinggi</h3>
<p>
Script ringan dan smooth digunakan
di berbagai device tanpa lag berlebihan.
</p>
</div>

<div class="feature-card">
<div class="feature-icon">🛡️</div>
<h3>Keamanan Terjamin</h3>
<p>
Script aman digunakan dan selalu update
agar tetap stabil saat dimainkan.
</p>
</div>

<div class="feature-card">
<div class="feature-icon">✅</div>
<h3>Mudah Digunakan</h3>
<p>
Tampilan simple dan support untuk pemula
yang baru menggunakan script Roblox.
</p>
</div>

<div class="feature-card">
<div class="feature-icon">💎</div>
<h3>Full Akses Script</h3>
<p>
Mendapatkan fitur premium lengkap
tanpa batasan penggunaan.
</p>
</div>

<div class="feature-card">
<div class="feature-icon">🔄</div>
<h3>Update Berkala</h3>
<p>
Script terus diperbarui untuk menjaga
performa dan mengurangi bug/error.
</p>
</div>

<div class="feature-card">
<div class="feature-icon">🎧</div>
<h3>Support 24/7</h3>
<p>
Bantuan aktif kapan saja melalui Discord
dan komunitas resmi Yanto Hub.
</p>
</div>

</div>

</div>


<h2 class="section-title reveal" id="scripts">
FREE SCRIPTS
</h2>

<div class="grid reveal">

<div class="card">

<div>
<div class="badge">MOUNT FREE</div>

<h3>MOUNT FREE SCRIPT</h3>

<div class="script-box" id="s1">
loadstring(game:HttpGet("https://yantohub.my.id/free-yanto"))()
</div>

<div class="info">
🔹 Status: Aktif & Work ✅
<br>
🔹 Support: https://dsc.gg/yantorobloxhub
<br>
🔹 Donasi: https://saweria.co/yantoroblox
</div>
</div>

<button class="copy-btn" onclick="copyScript('s1')">
COPY SCRIPT
</button>

</div>

<div class="card">

<div>
<div class="badge">+1 HEALTH</div>

<h3>+1 HEALTH PER CLICK</h3>

<div class="script-box" id="s2">
loadstring(game:HttpGet("https://raw.githubusercontent.com/YantoRoblox/YantoYRHUB/refs/heads/main/%2B1HEALTHPERCLICK"))()
</div>

<div class="info">
🔹 Status: Aktif & Work ✅
<br>
🔹 Support: https://dsc.gg/yantorobloxhub
<br>
🔹 Donasi: https://saweria.co/yantoroblox
</div>
</div>

<button class="copy-btn" onclick="copyScript('s2')">
COPY SCRIPT
</button>

</div>

<div class="card">

<div>
<div class="badge">RUNNER</div>

<h3>HYPER SPEED RUNNER</h3>

<div class="script-box" id="s3">
loadstring(game:HttpGet("https://raw.githubusercontent.com/YantoRoblox/YantoYRHUB/refs/heads/main/HyperSpeedRunner"))()
</div>

<div class="info">
🔹 Status: Aktif & Work ✅
<br>
🔹 Support: https://dsc.gg/yantorobloxhub
<br>
🔹 Donasi: https://saweria.co/yantoroblox
</div>
</div>

<button class="copy-btn" onclick="copyScript('s3')">
COPY SCRIPT
</button>

</div>

</div>


<div class="big-box reveal">

<h3>🌄 FREE SCRIPT AUTO SUMMIT LIST 🌄</h3>

<p>

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

[ READY TO USE ]

🔰 Gunung YNTKTS
🔰 Gunung Auryn
🔰 Gunung Kawai
🔰 Gunung Papua (SUPER FAST)
🔰 Gunung CKPTW V2
🔰 Gunung Cow
🔰 Kota Bukan Gunung
🔰 Gunung Olap
🔰 Kawah Terjun (HARD)
🔰 Gunung Kamu
🔰 Gunung Ragon
🔰 Gunung Yayakin
🔰 Gunung Semut
🔰 Gunung Laufas
🔰 Gunung Seraphim
🔰 Gunung Steval

[ SYSTEM STATUS ]

✅ Script Berhasil: ACTIVE
❌ Script Error: NONE

🚀 UPGRADE KE VIP UNTUK LAINNYA !
Hubungi: Developer Discord

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

</p>

</div>


<div class="big-box reveal">

<h3>⛰️ VIP AUTO SUMMIT ⛰️</h3>

<p>

╔════════════════════════╗
  ⛰️ SCRIPT: AUTO SUMMIT ⛰️
╚════════════════════════╝

💎 LIST SCRIPT GUNUNG [VIP] 💎
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

✅ Gunung Yahayuk V3
✅ Gunung Aetheria
✅ Gunung Lembayana
✅ Gunung Moonlight V2
✅ Gunung Hell Expedition
✅ Gunung Vespheria
✅ Gunung Atin
✅ Gunung Victoria
✅ Gunung Arunika
✅ Gunung Sawit
✅ Gunung Soren
✅ Gunung Noxera
✅ Gunung Serelia
✅ Gunung Rakuen
✅ Gunung Sibuatan
✅ Gunung Tate
✅ Gunung Gamon
✅ Gunung Niagara
✅ Gunung Akhirat
✅ Gunung Neovaria
✅ Gunung Pedaunan
✅ Gunung Euria
✅ Gunung Sumbing (Hard)
✅ Gunung Erlia
✅ Gunung Gemi
✅ Gunung MBG
✅ Gunung Bagen Dah
✅ Gunung Nevora
✅ Gunung Freestyle
✅ Gunung Astera
✅ Gunung Seru
✅ Gunung Cendana
✅ Gunung Kita
✅ Gunung Gebok
✅ Gunung Koplo
✅ Gunung Goyaa
✅ Gunung Keyboard
✅ Gunung Doragon
✅ Gunung Skytopia
✅ Gunung Teduh
✅ Gunung Veloria
✅ Gunung KicauanMania
✅ Gunung Bombo
✅ Gunung Hambalang

🍃 LIST SCRIPT GUNUNG [FREE] 🍃
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

🎁 YNTKTS
🎁 Auryn
🎁 Kawai
🎁 Papua (Super Fast)
🎁 CKPTW V2
🎁 Cow
🎁 Kota Bukan Gunung
🎁 Olap
🎁 Kawah Terjun
🎁 Kamu
🎁 Ragon
🎁 Semut
🎁 Yayakin
🎁 Laufas
🎁 Seraphim
🎁 Steval

🛡️ STATUS SCRIPT:
● Berhasil: ✅
● Error: ❌

⚡ FITUR UNGGULAN (ALL MAPS):

🚀 MOVEMENT:
Fly, Walkspeed, Infinite Jump, Noclip

👁️ VISUAL:
ESP Player, Full Bright, Hide Player,
Sky Box, Freecam

🛠️ UTILITY:
Anti AFK, Copy Avatar, FPS Boost,
Potato Mode

🎭 FUN:
Animation, Change Name, Fake Donate,
Bring Part

🛰️ SPECIAL:
Auto Walk Record, Teleport,
CCTV, Laser Map,
Menu Title (Owner/Admin)

🔥 TERTARIK? HUBUNGI SEKARANG!

📞 DISCORD:
https://dsc.gg/yantorobloxhub

⚠️ DIAJARKAN SAMPAI BISA & SIAP PAKAI ⚠️

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

</p>

</div>


<div class="footer reveal">

<div>
<h2>YANTO HUB</h2>

<p>
Platform penyedia script premium gratis,
tempat kamu bisa mengakses dan menggunakan
script premium Roblox.
</p>
</div>

<div class="footer-links">

<h3>Links</h3>

<a href="#">Beranda</a>
<a href="#scripts">Fitur</a>
<a href="https://dsc.gg/yantorobloxhub">Join</a>

</div>

<div class="footer-links">

<h3>Join</h3>

<a href="https://dsc.gg/yantorobloxhub">
🎮 Discord
</a>

<a href="https://chat.whatsapp.com/D7UP3NbIX3xBV499USQRzx" target="_blank">
📱 WhatsApp Group
</a>

</div>

</div>

<div class="bottom-footer reveal">

<div>
© 2026 YANTO HUB. All rights reserved.
</div>

<div>
Privacy Policy &nbsp;&nbsp; Terms of Service
</div>

</div>

</div>


<div id="toast">
SCRIPT COPIED ✔
</div>

<script>


function copyScript(id){

const text=document.getElementById(id).innerText;

navigator.clipboard.writeText(text);

const toast=document.getElementById('toast');

toast.style.display='block';

setTimeout(()=>{
toast.style.display='none';
},2000);

}


const particles=document.getElementById("particles");

for(let i=0;i<100;i++){

const particle=document.createElement("div");

particle.classList.add("particle");

particle.style.left=Math.random()*100+"%";

particle.style.animationDuration=(Math.random()*10+10)+"s";

particle.style.animationDelay=Math.random()*5+"s";

particle.style.width=(Math.random()*4+2)+"px";

particle.style.height=particle.style.width;

particles.appendChild(particle);

}


const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const elementTop=reveals[i].getBoundingClientRect().top;

const elementVisible=120;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

</script>

</body>
</html>
</html>`;

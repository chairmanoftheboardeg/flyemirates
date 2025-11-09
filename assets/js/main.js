// Slider
let slideIndex = 0;
function showSlides(){
  const slides = document.querySelectorAll('.slide');
  if(!slides.length) return;
  slides.forEach(s=>s.classList.remove('active'));
  slideIndex = (slideIndex+1) % slides.length;
  slides[slideIndex].classList.add('active');
}
setInterval(showSlides, 4000);
document.addEventListener('DOMContentLoaded', ()=>{
  const slides = document.querySelectorAll('.slide');
  if(slides.length) slides[0].classList.add('active');
});

// Cookie consent
function acceptCookies(){
  localStorage.setItem('egr_cookies', '1');
  const c = document.getElementById('cookie');
  if(c) c.style.display='flex', c.style.display='none';
}
window.addEventListener('load', ()=>{
  if(!localStorage.getItem('egr_cookies')){
    const c = document.getElementById('cookie');
    if(c) c.style.display='flex';
  }
});

// ID helpers
function rand(n){return Math.floor(Math.random()*n)}
function pad(n, w){return (n+'').padStart(w,'0')}
function makeId(prefix){
  const d = new Date();
  const date = d.toISOString().slice(0,10).replace(/-/g,'');
  const tail = pad(rand(999999),6);
  return `${prefix}-${date}-${tail}`;
}

// Generic webhook sender
async function sendToWebhook(url, payload){
  const res = await fetch(url, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  return res.ok;
}

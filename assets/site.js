// NAV scroll
const navEl=document.getElementById('nav');
if(navEl){addEventListener('scroll',()=>navEl.classList.toggle('sc',scrollY>50),{passive:true});}

// Mobile menu
const navLinks=document.getElementById('navLinks'),navToggle=document.getElementById('navToggle');
if(navToggle&&navLinks){
  navToggle.addEventListener('click',()=>{const o=navLinks.classList.toggle('open');navToggle.textContent=o?'Chiudi':'Menu';navEl&&navEl.classList.toggle('menu-open',o)});
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle.textContent='Menu';navEl&&navEl.classList.remove('menu-open')}));
}

// Dropdown Servizi — toggle su mobile, hover su desktop (gestito da CSS)
document.querySelectorAll('.nav-drop > a').forEach(a=>{
  a.addEventListener('click',e=>{
    if(matchMedia('(max-width:820px)').matches){
      e.preventDefault();
      a.parentElement.classList.toggle('open-sub');
    }
  });
});

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{threshold:.14});
document.querySelectorAll('.rv').forEach(r=>io.observe(r));

// Page transition — fade breve in uscita verso link interni
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.addEventListener('click',e=>{
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    const a=e.target.closest('a[href]');
    if(!a||(a.target&&a.target!=='_self')||a.hasAttribute('download'))return;
    let url;try{url=new URL(a.href,location.href)}catch(err){return}
    if(url.origin!==location.origin)return;
    if(url.pathname===location.pathname&&url.search===location.search)return;
    e.preventDefault();
    document.body.classList.add('pg-out');
    setTimeout(()=>{location.href=a.href},150);
  });
}

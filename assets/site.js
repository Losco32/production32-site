// NAV scroll
const navEl=document.getElementById('nav');
if(navEl){addEventListener('scroll',()=>navEl.classList.toggle('sc',scrollY>50),{passive:true});}

// Mobile menu
const navLinks=document.getElementById('navLinks'),navToggle=document.getElementById('navToggle');
if(navToggle&&navLinks){
  navToggle.addEventListener('click',()=>{const o=navLinks.classList.toggle('open');navToggle.textContent=o?'Chiudi':'Menu'});
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle.textContent='Menu'}));
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

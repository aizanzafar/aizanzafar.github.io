const menuButton=document.querySelector('.menu-button');
const navLinks=document.querySelector('.nav-links');
if(menuButton&&navLinks){menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const filterButtons=document.querySelectorAll('[data-filter]');
const pubs=document.querySelectorAll('[data-year]');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;pubs.forEach(p=>p.style.display=(f==='all'||p.dataset.year===f)?'grid':'none');}));

const menuToggle=document.getElementById("menuToggle");
const header=document.querySelector(".header");
menuToggle.addEventListener("click",()=>{const open=header.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open?"true":"false")});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));

const slides=[...document.querySelectorAll(".slide")];
const dots=document.getElementById("sliderDots");
let current=0,timer;
slides.forEach((_,i)=>{const b=document.createElement("button");b.setAttribute("aria-label",`Go to slide ${i+1}`);b.addEventListener("click",()=>showSlide(i,true));dots.appendChild(b)});
function showSlide(index,manual=false){
  current=(index+slides.length)%slides.length;
  slides.forEach((s,i)=>s.classList.toggle("active",i===current));
  [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===current));
  if(manual) restart();
}
function restart(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),6500)}
document.getElementById("prevSlide").addEventListener("click",()=>showSlide(current-1,true));
document.getElementById("nextSlide").addEventListener("click",()=>showSlide(current+1,true));
showSlide(0);restart();

const progress=document.getElementById("siteProgress");
window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(h>0?(window.scrollY/h)*100:0)+"%";
});
document.getElementById("year").textContent=new Date().getFullYear();

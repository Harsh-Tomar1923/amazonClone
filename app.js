const imagegroup=document.querySelector('#imagegrp');
const scrollparent1=document.querySelector('#scroll-parent1');
const scrollparent2=document.querySelector('#scroll-parent2');
const scrollparent3=document.querySelector('#scroll-parent3');
const scrollparent4=document.querySelector('#scroll-parent4');
const scrollparent5=document.querySelector('#scroll-parent5');
const scrollparent6=document.querySelector('#scroll-parent6');
const scrollparent7=document.querySelector('#scroll-parent7');
const back=document.getElementById('backbtn');
const next=document.getElementById('nextbtn');
const back1=document.getElementById("backbtn2");
const next1=document.getElementById("nextbtn2");
const back2=document.getElementById("backbtn3");
const next2=document.getElementById("nextbtn3");
const back3=document.getElementById("backbtn4");
const next3=document.getElementById("nextbtn4");
const back4=document.getElementById("backbtn5");
const next4=document.getElementById("nextbtn5");
const back5=document.getElementById("backbtn6");
const next5=document.getElementById("nextbtn6");
const back6=document.getElementById("backbtn7");
const next6=document.getElementById("nextbtn7");
const back7=document.getElementById("backbtn8");
const next7=document.getElementById("nextbtn8");
back.addEventListener('click',()=>{
    imagegroup.style.scrollBehavior='smooth';
    imagegroup.scrollLeft-=1370;
})
next.addEventListener('click',()=>{
    imagegroup.style.scrollBehavior='smooth';
    imagegroup.scrollLeft+=1370;
})
back1.addEventListener('click',()=>{
    scrollparent1.style.scrollBehavior='smooth';
    scrollparent1.scrollLeft-=1371;
})
next1.addEventListener('click',()=>{
    scrollparent1.style.scrollBehavior='smooth';
    scrollparent1.scrollLeft+=1371;
})
back2.addEventListener('click',()=>{
    scrollparent2.style.scrollBehavior='smooth';
    scrollparent2.scrollLeft-=1371;
})
next2.addEventListener('click',()=>{
    scrollparent2.style.scrollBehavior='smooth';
    scrollparent2.scrollLeft+=1371;
})
back3.addEventListener('click',()=>{
    scrollparent3.style.scrollBehavior='smooth';
    scrollparent3.scrollLeft-=1371;
})
next3.addEventListener('click',()=>{
    scrollparent3.style.scrollBehavior='smooth';
    scrollparent3.scrollLeft+=1371;
})
back4.addEventListener('click',()=>{
    scrollparent4.style.scrollBehavior='smooth';
    scrollparent4.scrollLeft-=1371;
})
next4.addEventListener('click',()=>{
    scrollparent4.style.scrollBehavior='smooth';
    scrollparent4.scrollLeft+=1371;
})
back5.addEventListener('click',()=>{
    scrollparent5.style.scrollBehavior='smooth';
    scrollparent5.scrollLeft-=1371;
})
next5.addEventListener('click',()=>{
    scrollparent5.style.scrollBehavior='smooth';
    scrollparent5.scrollLeft+=1371;
})
back6.addEventListener('click',()=>{
    scrollparent6.style.scrollBehavior='smooth';
    scrollparent6.scrollLeft-=1371;
})
next6.addEventListener('click',()=>{
    scrollparent6.style.scrollBehavior='smooth';
    scrollparent6.scrollLeft+=1371;
})
back7.addEventListener('click',()=>{
    scrollparent7.style.scrollBehavior='smooth';
    scrollparent7.scrollLeft-=1371;
})
next7.addEventListener('click',()=>{
    scrollparent7.style.scrollBehavior='smooth';
    scrollparent7.scrollLeft+=1371;
})
function fun(){
    imagegroup.style.scrollBehavior='smooth';
    imagegroup.scrollLeft+=1370;
    }
function fun2(){
    imagegroup.style.scrollBehavior='initial';
    imagegroup.scrollLeft-=1370*5;
}
setInterval(fun,5000);
setInterval(fun2,25000);
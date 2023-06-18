
let toggle = document.querySelector(".toggle");
let menu  = document.querySelector(".menu");
toggle.addEventListener('click',function(){
  menu.classList.toggle('showmenu');
});
  const sr= ScrollReveal ({
    distance: '70px',
    duration: 3000,
    reset:true
  })
  sr.reveal('.title',{delay:150,origin:'bottom'});
  sr.reveal('.logo2',{delay:150,origin:'bottom'});
sr.reveal('.service',{delay:150,origin:'left'});
sr.reveal('#mission',{delay:150,origin:'bottom'});
sr.reveal('.dimg',{delay:150,origin:'top'});
sr.reveal('.donate1',{delay:150,origin:'left'});
sr.reveal('#about',{delay:150,origin:'top'});
sr.reveal('.fuser',{delay:150,origin:'left'});


  let scrollContainer = document.querySelector(".gallery");
      let backBtn = document.getElementById("backBtn");
      let nextBtn = document.getElementById("nextBtn");

      scrollContainer.addEventListener("wheel", (evt)=> {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
      });
      nextBtn.addEventListener("click",()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft +=900;
      });
      backBtn.addEventListener("click",()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
      });

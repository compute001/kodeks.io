let dsb =new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 60,
  pagination: {
      el: ("#swiper-2 .swiper-custom-pagination"),
      clickable: true,
      renderBullet: function (index, className) {
      return `<div class=${className}>
          <span class="number">${index + 1}</span>
          <span class="line"></span>
          </div>`;
      }
  },
  autoplay: {
    delay: 7000,
  },
  lazyLoading: true,
  loop: true,
  keyboard: {
      enabled: true,
  },
  navigation: {
      nextEl: "#nav-right",
      prevEl: "#nav-left"
  },
  breakpoints: {
      800: {
          slidesPerView: 1.5,
      },
      
    spaceBetween: 60,
  }
});


const pauseBtn=document.querySelector('.pause');
const playBtn=document.querySelector('.play');
pauseBtn.addEventListener('click', function(){
  dsb.autoplay.stop();
  playBtn.style.display = 'inline-block';
  pauseBtn.style.display = 'none';
})

playBtn.addEventListener('click', function(){
  dsb.autoplay.start();
  pauseBtn.style.display = 'inline-block';
  playBtn.style.display = 'none';
})


//NAVBAR SECTION

let l1=document.querySelector('.li1');
let l2=document.querySelector('.li2');
let l3=document.querySelector('.li3');

let closebtn=document.querySelectorAll('.closesect');

let firstsection=document.querySelector('.whatwedocontent');
let secondsection=document.querySelector('.whatweare');
let thirdsection=document.querySelector('.insights');

l1.addEventListener('mouseenter',function(){
  firstsection.classList.add('active');
})

l2.addEventListener('mouseenter',function(){
  secondsection.classList.add('active');
})


l3.addEventListener('mouseenter',function(){
  thirdsection.classList.add('active');
})

console.log(closebtn);
closebtn.forEach(function(item){
 item.addEventListener('click', function(){
    console.log("working");
    firstsection.classList.remove('active');
    secondsection.classList.remove('active');
    thirdsection.classList.remove('active');
  })
})


//Navbar
let menuopenclose = document.querySelector('.menubarbtn');
let navbar=document.querySelector('.navbar');
// let closenavbtn=document.querySelector('.closenavbtn');

menuopenclose.addEventListener('click',function(){
  navbar.classList.toggle('active');
  menuopenclose.classList.toggle('active');

})


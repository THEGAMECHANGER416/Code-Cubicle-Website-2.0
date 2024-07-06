var countDownDate = new Date("Jul 27, 2024 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("timer").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
const updateCar = () =>{
  const {scrollTop,scrollHeight}=document.documentElement;
  const scrollPercent = `${(scrollTop/(scrollHeight-window.innerHeight)) * 100}%`;
  document.querySelector('.car_img').style.setProperty('--leftPos',scrollPercent);
}
document.addEventListener('scroll',updateCar);
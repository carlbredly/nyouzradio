let mizikjwe= document.getElementById("mizik")
let play =document.getElementById("play")
let pause =document.getElementById("stop")
let vire = document.getElementById("disk")
let vol=document.getElementById("volume")
let close=document.getElementById("close")
let ranpli= document.getElementById("kontakid")
let montre=document.getElementById("show")

close.addEventListener("click", function(){
   ranpli.style.display="none";

});
montre.addEventListener("click", function(){
    ranpli.style.display="block";
});


play.addEventListener("click", function(){
    mizikjwe.play();
    play.style.display="none";
    vire.classList.add("rotation");

});

pause.addEventListener("click", function(){
    mizikjwe.pause();
    play.style.display="block";
    vire.classList.remove("rotation");
})
vol.addEventListener("click", function(){
    mizikjwe.volume = vol.value;
    mizikjwe.volume = vol.value;
})
const image= [
    'background/back2.jpeg',
    'background/back3.jpeg',
    'background/back4.jpeg',
    'background/back5.jpeg',
    'background/back6.jpeg',
    'background/back7.webp'
];
let index = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url(${image[index]})`;
  index = (index + 1) % image.length;
}, 7000);

    
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
//canvas.style.backgroundColor = "green"
let intervalID = 0

let score = 0;

let startBtn = document.querySelector('.btn')

let backImg = new Image(1000 ,500)
backImg.src = 'images/background.png'

let fireCirImg = new Image(100, 100)
fireCirImg.src = 'images/firecir2.jpg'

let firePotImg = new Image(100, 100)
firePotImg.src = 'images/firepot.png'

let lionImg = new Image(100, 100)
lionImg.src = 'images/lion2.jpg'

let isLeftArrow = false
let isRightArrow = false
let lionY= 335;

let constant = firePotImg.width + 120
let circleArray = [{x: canvas.width -80 , y:120}]

let myAudio = new Audio('audio/stage1.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
//myAudio.play();

//lion moving
document.addEventListener('keydown',(event) => {
    if(event.keycode == 39 || event.key == "ArrowRight"){
        isRightArrow = true;
        isLeftArrow = false;
    }
    else if (event.keycode == 37 || event.key == "ArrowLeft") {
       isRightArrow = false;
       isLeftArrow = true;
    }
})

document.addEventListener('keyup',(event) => {
   isRightArrow = false;
   isLeftArrow = false;
})
 

function draw(){

      ctx.drawImage(backImg ,0 ,0, 1000, 500)
      ctx.drawImage(lionImg, 100, lionY ,100 ,100)
      for(let i=0; i< circleArray.length; i++){
        ctx.drawImage(fireCirImg, circleArray[i].x, circleArray[i].y , 100, 245 )
        ctx.drawImage(firePotImg, circleArray[i].x, circleArray[i].y + constant ,90, 80)
        console.log("circleArray")
        circleArray[i].x--
    }
      if(circleArray[i].x == 50){
        circleArray.push({
              x: canvas.width + 30,
              y: -Math.floor(Math.random()* fireCirImg.height)
          })
      }

      lionY +=lionIncrement
      
     }

function startGame(){
    canvas.style.display = 'block'
    startBtn.style.disply = 'none'
     intervalID = setInterval(() =>{
      requestAnimationFrame(draw) //too imp otherwise crash laptop
},50)
}
window.addEventListener('load', () =>{
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
     }, 10)
    requestAnimationFrame(draw)
},0)

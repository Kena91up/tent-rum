let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let startBtn = document.querySelector('.btn-secondary')
let intervalID = 0

let score = 0;

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
let lionY = 292;
let lionX = 100;
let incrementX = 50;
let incrementY = 50;
let incrementLion = 5;

let keyup;

let constant = firePotImg.height + 120
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
   if(event.keyCode == 36  || event,key == "ArrowUp"){
       keyup = true;
   }
},false);
 
function ballCollision(){

    //check for circel
      if( lionX + lion.width >= circleArray[i].x && lionY <= circleArray[i].x + fireCirImg.width && (lionY <= circleArray[i].y + fireCirImg.height || lionY + lionImg.height >= circleArray[i].y + constant) || lionY + lionImg.height >= canvas.height - firePotImg.height){
          score++
      } else {
        clearInterval(intervalID);
        alert('Game Over')
      }
}


function draw(){
    
      ctx.drawImage(backImg ,0 ,0, 1000, 500)
      
      ctx.drawImage(lionImg, lionX, lionY ,120 ,120)
      for(let i=0; i< circleArray.length; i++){
        ctx.drawImage(fireCirImg, circleArray[i].x, circleArray[i].y , 100, 245)
        ctx.drawImage(firePotImg, circleArray[i].x, circleArray[i].y + constant ,90, 80)
        console.log("circleArray")
        circleArray[i].x--
    }
      if(circleArray[circleArray.length-1].x < 30){
        circleArray.push({
              x: canvas.width ,
              y: fireCirImg.height + 20
          })
      }

      ballCollision();
       if(isRightArrow && (lionX + lionImg.Width < canvas.width)) {
        lionX += incrementLion
        console.log(lionX)

       } else if( isLeftArrow && lionX >0)
       {
           lionX -= incrementLion
       } else if(keyup && lionY >0){
           lionY += incrementLion
       }
     // lionX += incrementX
     // lionY += incrementY
     ctx.font = '20px Verdana'
    ctx.fillText('score: ' + score, 20 ,canvas.height - 50)
      
     }

function startGame(){
    canvas.style.display = 'block'
    startBtn.style.disply = 'none'
     intervalID = setInterval(() =>{
      requestAnimationFrame(draw) //too imp otherwise crash laptop
},30)
}
function gameOver(){
    canvas.style.display = 'block'
    startBtn.style.disply = 'none'
}
window.addEventListener('load', () =>{
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
     }, 10)
    requestAnimationFrame(draw)
},0)
window.addEventListener('load', () => {
    canvas.style.display = 'none'
     startBtn.addEventListener('click', () =>{
        startGame()
    })

})
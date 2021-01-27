let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let startBtn = document.querySelector('.btn-secondary')
let gameoverBtn = document.querySelector('.exit')
let intervalID = 0

let score = 0;
let i = 0;

let backImg = new Image(1000 ,500)
backImg.src = 'images/background.png'

let fireCirImg = new Image(100, 100)
fireCirImg.src = 'images/firecircle.png'

let firePotImg = new Image(100, 100)
firePotImg.src = 'images/firepot.png'

let lionImg = new Image(100, 100)
lionImg.src = 'images/lion2.png'

let isLeftArrow = false
let isRightArrow = false
let lionY = 292;
let lionX = 100;
let incrementX = 1;
let incrementY = 1;
let incrementLion = 1;

let isUpArrow = false;
let isDownArrow = false;

let constant = firePotImg.height + 120
let circleArray = [{x: canvas.width -80 , y:120}]

let touchfire = {x:fireCirImg, y:firePotImg};
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
        isUpArrow = false;
        isLeftArrow = false;
        isDownArrow = false;

    }
    else if (event.keycode == 37 || event.key == "ArrowLeft") {
       isRightArrow = false;
       isLeftArrow = true;
       isUpArrow = false;
       isDownArrow = false;
    } else  if(event.keycode == 38  || event.key == "ArrowUp"){
        isUpArrow = true;
        isDownArrow = false;
        isLeftArrow = false;
        isRightArrow = false;

   }else if(event.keycode == 40  || event.key == "ArrowDown"){
        isUpArrow = false;
        isDownArrow = true;
        isLeftArrow = false;
        isRightArrow = false;
}
})

function draw(){
     ctx.clearRect(0, 0,canvas.width, canvas.height) 

      ctx.drawImage(backImg ,0 ,0, 1000, 500)
      
      ctx.drawImage(lionImg, lionX, lionY ,120 ,120)
      for(let i=0; i< circleArray.length; i++){
        ctx.drawImage(fireCirImg, circleArray[i].x, circleArray[i].y , 100, 245)
        ctx.drawImage(firePotImg, circleArray[i].x + 400, circleArray[i].y + constant ,90, 80)
        
        circleArray[i].x--

        
    }
      if(circleArray[circleArray.length-1].x < 30){
          score++
        circleArray.push({
              x: canvas.width ,
              y: fireCirImg.height + 20
          })
      }

       if(isRightArrow && lionX > 0 ) {
        lionX += incrementLion

       } else if( isLeftArrow && lionX >0){
          lionX -= incrementLion

       } else if(isUpArrow && lionY > 180){
           lionY -= incrementLion

       } else if (isDownArrow && lionY < 292) {
          lionY += incrementLion
       }

       // when player jumps to the top, then isUpKey should be false

       // Automatic fall down
       if (lionY > 180 && lionY < 292 && !isUpArrow) {
        lionY += incrementLion
       }

      ctx.font = '20px Verdana'
      ctx.fillText('score: ' + score, 20 ,canvas.height - 50)
      lionCollision();
      
     }
     function lionCollision(){

        //check for circel
        for(let i=0; i< circleArray.length; i++){
          //if( lionX + lionImg.width >= circleArray[i].x && lionY <= circleArray[i].x + fireCirImg.width && (lionY <= circleArray[i].y + fireCirImg.height || lionY + lionImg.height >= circleArray[i].y + constant)){
            //  console.log("circle collision")
       // }
          //if (lionX + lionImg.width >= circleArray[i].x + 400 && lionX <= circleArray[i].x + firePotImg.width + 400 && (lionY <= circleArray[i].y + firePotImg.height || lionY + lionImg.height >= circleArray[i].y + constant)){
            //console.log("pot collission")
          //}
          // fire pot collission
            if (lionX <  circleArray[i].x + 400 + firePotImg.width &&
                lionX + lionImg.width >  circleArray[i].x + 400 &&
                lionY <  circleArray[i].y + firePotImg.height + constant&&
                lionY + lionImg.height >  circleArray[i].y + constant) {
                    console.log("fire pot col")
                    clearInterval(intervalID);
                    alert('Game Over');
                    location.reload();
            }

            // circle bottom collission
            if (lionX <  circleArray[i].x +  fireCirImg.width &&
                lionX + lionImg.width >  circleArray[i].x  &&
                lionY <  circleArray[i].y + fireCirImg.height + 200 &&
                lionY + lionImg.height >  circleArray[i].y + 200) {
                    console.log("fire circle col")
                    
                    alert('Game Over');
                    document.location.reload();
                    clearInterval(intervalID);
            }

        // if (lionImg.touchfire ) {
        //     clearInterval(intervalID);
        //     alert('Game Over');
        //     location.reload();
        // }
    }
    }

function startGame(){
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
     intervalID = setInterval(() =>{
      requestAnimationFrame(draw) //too imp otherwise crash laptop
},30)
}
function gameOver(){
    canvas.style.display = 'block'
    gameoverBtn.style.display = 'none'
    intervalID = setInterval(() =>{
    //too imp otherwise crash laptop
  },30)
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
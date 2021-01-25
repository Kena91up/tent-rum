// class mainPage {
//     constructor() {
//         this.music = 0;
//         this.playButton = 0;
//     }
// };

// fuction create() {

//     this.backgroundColor = '#000';
//      let starsmenu=this.start.add.sprite(130, 100, 'starsmenu');
//          starsmenu.scale.x =5;
//          starsmenu.scale.y =5;

//     this.startText=this.start.add.text(this.game.width / 2 - 180, this.game.height / 2 + 120, 'Press  ENTER  to\n start playing', textstyle);
//     this.start.physics.startSystem(Phaser.Physics.ARCADE);
         
//     let clown= this.start.add.sprite(100, 600, 'clown');
//     clown.scale.x =4;
//     clown.scale.y =4;
//     this.game.physics.enable(clown, Phaser.Physics.ARCADE);
//     clown.body.velocity.x =100;
    
//     clown.animations.add('run', Phaser.Animation.generateFrameNames('clown', 0, 2, '', 4), 10 , true);
//     clown.animations.play('run', 8, true);
//     }

// the game itself
var game;
// the spinning wheel
var wheel;
// can the wheel spin?
var canSpin;
// slices (prizes) placed in the wheel
var slices = 8;
// prize names, starting from 12 o'clock going clockwise
var slicePrizes = [
    'a Grab Promo Code', 'a Grab Promo Code', 'a Grab Promo Code',
    'P100 worth of GC', 'P100 worth of GC',
    'a 4GB Flash Drive', 'a 4GB Flash Drive',
    '1 Day Leave with Pay', '1 Day Leave with Pay',
    'the Jackpot!'
];
// equivalent value
// the prize you are about to win
var prize;
// text field where to show the prize
var prizeText;
// text field for information
var infoText;

window.onload = function () {
    // creation of a 458x488 game
    game = new Phaser.Game(300, 300, Phaser.CANVAS, "container");
    // adding "PlayGame" state
    game.state.add("PlayGame", playGame);
    // launching "PlayGame" state
    game.state.start("PlayGame");
}

// PLAYGAME STATE

var playGame = function (game) { };

playGame.prototype = {
    // function to be executed once the state preloads
    preload: function () {
        // preloading graphic assets
        game.load.image("wheel", "assets/img/wheel.png");
        game.load.image("pin", "assets/img/pin.png");
    },
    // funtion to be executed when the state is created
    create: function () {
        // giving some color to background
        game.stage.backgroundColor = "#FFFFFF";
        // adding the wheel in the middle of the canvas
        wheel = game.add.sprite(game.width / 2, game.height / 2.5, "wheel");
        // scale down the wheel
        wheel.scale.set(0.25);
        // setting wheel registr    ation point in its center
        wheel.anchor.set(0.5, 0.5);
        // adding the pin in the middle of the canvas
        var pin = game.add.sprite(game.width / 2, game.height / 2.5, "pin");
        // setting pin registration point in its center
        pin.anchor.set(0.5);
        //style for text
        style = { font: "bold 16px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        // adding the text field
        prizeText = game.add.text(game.world.centerX, game.world.height * 0.8, "", style);
        infoText = game.add.text(game.world.centerX, game.world.height * 0.9, "", style);
        // setting text field registration point in its center
        prizeText.anchor.set(0.5);
        infoText.anchor.set(0.5);
        // aligning the text to center
        prizeText.align = "center";
        infoText.align = "center";
        // the game has just started = we can spin the wheel
        canSpin = true;
        // waiting for your input, then calling "spin" function
        game.input.onDown.add(this.spin, this);
    },
    // function to spin the wheel
    spin() {
        // can we spin the wheel?
        if (canSpin) {
            // resetting text field
            prizeText.text = "";
            // the wheel will spin round from 2 to 4 times. This is just coreography
            var rounds = game.rnd.between(2, 4);
            // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
            var degrees = game.rnd.between(0, 360);
            // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
            prize = slices - 1 - Math.floor(degrees / (360 / slices));
            // now the wheel cannot spin because it's already spinning
            canSpin = false;
            // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
            // the quadratic easing will simulate friction
            var spinTween = game.add.tween(wheel).to({
                angle: 360 * rounds + degrees
            }, 3000, Phaser.Easing.Quadratic.Out, true);
            // once the tween is completed, call winPrize function
            spinTween.onComplete.add(this.winPrize, this);
        }
    },
    // function to assign the prize
    winPrize() {
        // now we can spin the wheel again
        canSpin = true;
        // writing the prize you just won
        prizeText.text = "You won " + slicePrizes[prize] + "!";
        // writing the info
        infoText.text = "You may claim your prize at the HR office.";
    }
}
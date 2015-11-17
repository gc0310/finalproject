//http://speckyboy.com/demo/windmill-demo/index.html
require(
    [],
    function () {
            
        console.log("yo, I'm alive!");

        var paper = new Raphael(document.getElementById("mySVGCanvas"));
        var pWidth = paper.canvas.offsetWidth -95;
        var pHeight = paper.canvas.offsetHeight -150;


        // ===================================================
        //  IMAGES & TEXT  
        // ===================================================

        var sushi = paper.image("images/Sushi2.png", -100,-100, 100, 190);
        var cat = paper.image("images/CatStart.png", 46, 207, 454, 293);
        var nameofgame = paper.text(345, 80, "Feed Tubbs!").attr({"font-size":"90px", "font-family":"Besom", "font-weight": "bold", "fill":"#222222"});
        var gamedescription = paper.text(345, 150, "Tubbs the chubby cat is a little picky eater. Unlike other cats,\nhe has grown to like sushi instead of regular ol' canned food.\n\nCollect points by collecting pieces of sushi as it moves \naround the board but be wary of those pesky canned foods!").attr({"font-size":"12px", "letter-spacing": "-0.5px", "font-width":"90%", "font-family":"verdana", "text-align": "none", "fill":"#222222"});
        
        var sushiicon = paper.image("images/Sushi2.png", 50, 10, 90, 190);
        var sushiscore = paper.text(100,170, "5 Pts").attr({"font-size":"20px", "font-family":"Besom", "font-weight": "bold", "fill":"#FB2A34"});
        var canfoodicon = paper.image("images/CanFood.png", 560, 60, 83, 75);
        var canfoodscore = paper.text(600,170, "-5 Pts").attr({"font-size":"20px", "font-family":"Besom", "font-weight": "bold", "fill":"#456600"});

        var startimage = paper.image("images/startbutton.png", 500, 270, 140, 139);

        //  Text for the live score & time display
        var scoreText = paper.text(100,50, "");
        scoreText.attr({'fill': 'white','font-size': 30,'font-family':'Besom'});
        var timerText = paper.text(580,50, "");
        timerText.attr({'fill': 'white','font-size': 30,'font-family':'Besom'});

        //  Images of the moving cans 
        var can1 = paper.image("images/CanFood.png", -300, -300, 91, 79);
        var can2 = paper.image("images/CanFood2.png", -300, -300, 91, 79);
        var can3 = paper.image("images/CanFood.png", -300, -300, 91, 79);
        var can4 = paper.image("images/CanFood2.png", -300, -300, 91, 79);
        var can5 = paper.image("images/CanFood.png", -300, -300, 91, 79);


        // ===================================================
        //  DEFAULT COUNTERS
        // ===================================================

        var counter = 0; // counts clicks on target object   
        var starttime;
        var endtime;
        var starttimer = 0; // counts no. of sec game runs for
        

        // ===================================================
        //  RANDOM NUMBER GENERATOR - This would generate 
        //  random x & y positions for the moving cans
        // ===================================================

        var randInt = function( m, n ) {
            var range = n-m+1;
            var frand = Math.random()*range;
            return m+Math.floor(frand);
        };


        // ===================================================
        //  START SCREEN - Function when called, will show
        //  all elements in the start screen 
        // ===================================================

        var ready = function(){
            startimage.show();
            cat.show();
            nameofgame.show();
            gamedescription.show();
            timerText.show();
            sushiicon.show();
            sushiscore.show();
            canfoodicon.show();
            canfoodscore.show();
        };


        // ===================================================
        //  GAME - Allows the user to choose 
        //  from 3 difficulty levels
        // ===================================================

        // Called when the start button is clicked to hide the startButton and begin the game
        var start = function (){
        	console.log("Game is starting...");

            // Hides all images and text on the start screen
            startimage.hide();
            cat.hide();
            nameofgame.hide();
            gamedescription.hide();
            sushiicon.hide();
            sushiscore.hide();
            canfoodicon.hide();
            canfoodscore.hide();
            timerText.show();
            scoreText.show();

            
            var difficultyLevel = prompt("Set your difficulty level!\n1 - Easy, 2 - Medium, 3 - Hard.\nGood luck!", "1");


            // -------------------------------------------------
            //  Difficulty levels - Allows the user to choose 
            //  from 3 difficulty levels
            // -------------------------------------------------
                    
                    if (difficultyLevel==="1") { 
                        sushi.xpos = randInt(0,5)*100;
                        sushi.ypos = randInt(0,3)*100;
                        sushi.xrate = 30;
                        sushi.yrate = 30;
                        
                        can1.xpos = randInt(0,5)*100;
                        can1.ypos = randInt(0,3)*100;
                        can1.xrate = 20;
                        can1.yrate = 20;

                        can2.xpos = randInt(0,5)*100;
                        can2.ypos = randInt(0,3)*100;
                        can2.xrate = 20;
                        can2.yrate = 20;
                        
                        var movingCan1 = setInterval(moveCan,100);
                        var movingCan2 = setInterval(moveCan2,100);
                    };


                    if (difficultyLevel==="2") { 

                        sushi.xpos = randInt(0,5)*100;
                        sushi.ypos = randInt(0,3)*100;
                        sushi.xrate = 40;
                        sushi.yrate = 40;

                        can1.xpos = randInt(0,5)*100;
                        can1.ypos = randInt(0,3)*100;
                        can1.xrate = 30;
                        can1.yrate = 30;

                        can2.xpos = randInt(0,5)*100;
                        can2.ypos = randInt(0,3)*100;
                        can2.xrate = 40;
                        can2.yrate = 40;

                        can3.xpos = randInt(0,5)*100;
                        can3.ypos = randInt(0,3)*100;
                        can3.xrate = 30;
                        can3.yrate = 30;

                        can4.xpos = randInt(0,5)*100;
                        can4.ypos = randInt(0,3)*100;
                        can4.xrate = 40;
                        can4.yrate = 40;

                        var movingCan1 = setInterval(moveCan,100);
                        var movingCan2 = setInterval(moveCan2,100);
                        var movingCan3 = setInterval(moveCan3,100);
                    };


                    if (difficultyLevel==="3") { 
                    
                        sushi.xpos = randInt(0,5)*100;
                        sushi.ypos = randInt(0,3)*100;
                        sushi.xrate = 50;
                        sushi.yrate = 50;

                        can1.xpos = randInt(0,5)*100;
                        can1.ypos = randInt(0,3)*100;
                        can1.xrate = 30;
                        can1.yrate = 30;

                        can2.xpos = randInt(0,5)*100;
                        can2.ypos = randInt(0,3)*100;
                        can2.xrate = 40;
                        can2.yrate = 40;

                        can3.xpos = randInt(0,5)*100;
                        can3.ypos = randInt(0,3)*100;
                        can3.xrate = 30;
                        can3.yrate = 30;

                        can4.xpos = randInt(0,5)*100;
                        can4.ypos = randInt(0,3)*100;
                        can4.xrate = 40;
                        can4.yrate = 40;
                        
                        can5.xpos = randInt(0,5)*100;
                        can5.ypos = randInt(0,3)*100;
                        can5.xrate = 30;
                        can5.yrate = 30;

                        var movingCan1 = setInterval(moveCan,100);
                        var movingCan2 = setInterval(moveCan2,100);
                        var movingCan3 = setInterval(moveCan3,100);
                        var movingCan4 = setInterval(moveCan4,100);
                        var movingCan5 = setInterval(moveCan5,100);
                    };

                    //if the user types in any other value (e.g. 4/5/6), the game difficulty will be set to 1 by default
                    if ((difficultyLevel !=="1") && (difficultyLevel !=="2") && (difficultyLevel !=="3")) {
                        confirm('You have keyed in an invalid level. The game will be set to the default level - Level 1.');
                        sushi.xpos = randInt(0,5)*100;
                        sushi.ypos = randInt(0,3)*100;
                        sushi.xrate = 30;
                        sushi.yrate = 30;
                        
                        can1.xpos = randInt(0,5)*100;
                        can1.ypos = randInt(0,3)*100;
                        can1.xrate = 20;
                        can1.yrate = 20;

                        can2.xpos = randInt(0,5)*100;
                        can2.ypos = randInt(0,3)*100;
                        can2.xrate = 20;
                        can2.yrate = 20;
                        
                        var movingCan1 = setInterval(moveCan,100);
                        var movingCan2 = setInterval(moveCan2,100);
                    };


            // ---------------------------------------------------
            // Initialized Rates & Counters
            // ---------------------------------------------------

            // Starts the game timer at 0 seconds
            starttimer = 0; 

            // Starts the no. of clicks at 0 
            counter = 0; 


            // ---------------------------------------------------
            // Live Game Clock & Counter - Shows the amount of 
            // time and number of clicks the user's made
            // ---------------------------------------------------

            // Because there's a delay in the display, it will be set as 16 seconds for a '15' second game, 
            // so that players see the live timer counting down from 15 seconds

            var timer = 16;
            var displayedTicker = setInterval(function(){
                
                timer -- ;
                console.log(""+timer+"");
               
                timerText.attr('text',"Time Left: " + timer.toString());
                scoreText.attr('text',"Score: " + counter.toString());

                if (timer <= 5){
                    timerText.attr({
                    'fill':'red'
                })};

                if (timer <= 0){
                    clearInterval(displayedTicker);
                    timerText.attr({
                        'fill': 'white'
                    })};

            }, 1000);


            // ---------------------------------------------------
            //  Game Clock - Function that stops the game after
            //  15 seconds every time a user plays
            // ---------------------------------------------------

            // Function that will be called every 1 second
            var gameClock = setInterval( function(){
                    starttimer++; 
                    console.log("Game timer = " + starttimer);

                    if (starttimer===16) { 

                        // Hides the food
                        sushi.attr({x: -100,y: -100});
                        can1.attr({x:-100,y:-100});
                        can2.attr({x:-100,y:-100});
                        can3.attr({x:-100,y:-100});
                        can4.attr({x:-100,y:-100});
                        can5.attr({x:-100,y:-100});

                        
                        // Places the ready button back after the game ends
                        // and hides the countdown timer & click count text 
                        ready();
                        timerText.hide();
                        scoreText.hide();

                        // Shows the users no. of click on the square
                        confirm("Time's up!\n\nYou scored a total of " + counter + " points!\n\nPlay again?")
                        
                        // Clears the timer and movingCan functions, so that it starts from 0 when the player starts a new game
                        clearInterval(gameClock);
                        clearInterval(movingSushi); 
                        clearInterval(movingCan1);
                        clearInterval(movingCan2);
                        clearInterval(movingCan3);
                        clearInterval(movingCan4);
                        clearInterval(movingCan5);
                    } 
                    }
                , 1000);

            // Function that moves the square every 1/10th of a second. 
            // By naming the function, we can clear the interval when the timer reaches 10 seconds
            var movingSushi = setInterval(moveSushi,100);

        };


        // ===================================================
        //  MOVE CANS - Individual functions that moves the 
        //  cans of cat food as distractions for the user
        // ===================================================

        var moveCan = function(){
            can1.xpos = can1.xpos + can1.xrate;
            can1.ypos = can1.ypos + can1.yrate; 
            can1.attr({x: can1.xpos, y: can1.ypos});

            if (can1.xpos < 0) {can1.xrate = -1*can1.xrate};
            if (can1.xpos > pWidth) {can1.xrate = -1*can1.xrate};
            if (can1.ypos < 0) {can1.yrate = -1*can1.yrate};
            if (can1.ypos > pHeight){can1.yrate = -1*can1.yrate};
        };

        var moveCan2 = function(){
            can2.xpos = can2.xpos + can2.xrate;
            can2.ypos = can2.ypos + can2.yrate; 
            can2.attr({x: can2.xpos, y: can2.ypos});

            if (can2.xpos < 0) {can2.xrate = -1*can2.xrate};
            if (can2.xpos > pWidth) {can2.xrate = -1*can2.xrate};
            if (can2.ypos < 0) {can2.yrate = -1*can2.yrate};
            if (can2.ypos > pHeight){can2.yrate = -1*can2.yrate};
        };

        var moveCan3 = function(){
            can3.xpos = can3.xpos + can3.xrate;
            can3.ypos = can3.ypos + can3.yrate; 
            can3.attr({x: can3.xpos, y: can3.ypos});

            if (can3.xpos < 0) {can3.xrate = -1*can3.xrate};
            if (can3.xpos > pWidth) {can3.xrate = -1*can3.xrate};
            if (can3.ypos < 0) {can3.yrate = -1*can3.yrate};
            if (can3.ypos > pHeight){can3.yrate = -1*can3.yrate};
        };

        var moveCan4 = function(){
            can4.xpos = can4.xpos + can4.xrate;
            can4.ypos = can4.ypos + can4.yrate; 
            can4.attr({x: can4.xpos, y: can4.ypos});

            if (can4.xpos < 0) {can4.xrate = -1*can4.xrate};
            if (can4.xpos > pWidth) {can4.xrate = -1*can4.xrate};
            if (can4.ypos < 0) {can4.yrate = -1*can4.yrate};
            if (can4.ypos > pHeight){can4.yrate = -1*can4.yrate};
        };
    
        var moveCan5 = function(){
            can5.xpos = can5.xpos + can5.xrate;
            can5.ypos = can5.ypos + can5.yrate; 
            can5.attr({x: can5.xpos, y: can5.ypos});

            if (can5.xpos < 0) {can5.xrate = -1*can5.xrate};
            if (can5.xpos > pWidth) {can5.xrate = -1*can5.xrate};
            if (can5.ypos < 0) {can5.yrate = -1*can5.yrate};
            if (can5.ypos > pHeight){can5.yrate = -1*can5.yrate};
        };


        // ===================================================
        //  MOVE SUSHI - Code that moves the Sushi to random 
        //  positions after it's clicked
        // ===================================================

        var moveSushi = function(){
            sushi.xpos = sushi.xpos + sushi.xrate;
            sushi.ypos = sushi.ypos + sushi.yrate; 
            sushi.attr({x: sushi.xpos, y: sushi.ypos});

            if (sushi.xpos < 0) {sushi.xrate = -1*sushi.xrate; ballBounce.play()};
            if (sushi.xpos > pWidth) {sushi.xrate = -1*sushi.xrate; ballBounce.play()};
            if (sushi.ypos < 0) {sushi.yrate = -1*sushi.yrate; ballBounce.play()};
            if (sushi.ypos > pHeight){sushi.yrate = -1*sushi.yrate; ballBounce.play()};
        };
                

        // ===================================================
        //  SCORE COUNTERS 
        // ===================================================

        // ------------------
        //  Adds to score
        // ------------------
        var addScore = function(){  
            counter = counter + 5;
            console.log("no. of clicks = " + counter);
            clickSound.play();
            scoreText.attr('text',counter.toString());
        };

        // ------------------
        //  Subtracts score
        // ------------------
        var subScore = function(){  
            counter = counter - 5;
            console.log("no. of clicks = " + counter);
            subSound.play();
            scoreText.attr('text',counter.toString());
        };

        // ===================================================
        //  BUTTON EVENT LISTENERS
        // ===================================================

        sushi.node.addEventListener('click', addScore);
        sushi.node.addEventListener('click', moveSushi);
        startimage.node.addEventListener('click', start);

        can1.node.addEventListener('click',subScore);
        can2.node.addEventListener('click',subScore);
        can3.node.addEventListener('click',subScore);
        can4.node.addEventListener('click',subScore);
        can5.node.addEventListener('click',subScore);        

        // ===================================================
        //  AUDIO & SOUNDS
        // ===================================================

        var clickSound = new Audio("resources/Add.ogg");      
        clickSound.pause();
        clickSound.volume=0.1;

        clickSound.playAudio = function(){
            setTimeout(clickSound.play(), 20);
        };

        var subSound = new Audio("resources/Subtract.mp3");      
        subSound.pause();
        subSound.volume=0.1;

        subSound.playAudio = function(){
            setTimeout(subSound.play(), 20);
        };

        var gameBG = new Audio("resources/GameBGMusic.mp3");
        gameBG.play();
        gameBG.loop=true;
        gameBG.volume=0.8;


        // ===================================================
        //  ANIMATED FOOD ICONS - Animates the little icons
        //  at the front page of the game
        // ===================================================

        var movingsushiicon = function(){
            setTimeout(function(){sushiicon.animate({transform:"r-20"}, 500), "linear"}, 1000);
            setTimeout(function(){sushiicon.animate({transform:"r0"}, 500), "linear"}, 2000);
        };

        var movingcanicon = function(){
            setTimeout(function(){canfoodicon.animate({transform:"r20"}, 500), "linear"}, 1000);
            setTimeout(function(){canfoodicon.animate({transform:"r0"}, 500), "linear"}, 2000);
        };

        movingsushiicon();
        setInterval(movingsushiicon, 2000);

        movingcanicon();
        setInterval(movingcanicon,2000);



        // Put the start button on the screen 
        ready(); 




    }
);
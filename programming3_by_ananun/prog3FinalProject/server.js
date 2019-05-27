


//! Setting global arrays  --  START
grassArr = [];
grassEaterArr = [];
predatorArr = [];
charac4Arr = [];
charac5Arr = [];
grassHashiv = 0;
grassEaterHashiv = 0;
predatorHashiv = 0;
charac4Hashiv = 0;
charac5Hashiv = 0;
temperature = 0;
matrix = [];
//! Setting global arrays  -- END



//! Creating MATRIX -- START
var random = require('./modules/random');
function matrixGenerator(matrixSize, grass, grassEater,predator, charac4, charac5) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0 - 39
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < charac4; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < charac5; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(30,25,15);
//! Creating MATRIX -- END



//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Predator = require("./modules/Predator.js");
var Character4 = require("./modules/Charac4.js");
var Character5 = require("./modules/Charac5.js");
//! Requiring modules  --  END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;

            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
                
            } else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
                predatorHashiv++;

            } else if (matrix[y][x] == 4) {
                var charac4 = new Character4(x, y);
                charac4Arr.push(charac4); 
                charac4Hashiv++;

            } else if (matrix[y][x] == 5) {
                var charac5 = new Character5(x, y);
                charac5Arr.push(charac5); 
                charac5Hashiv++;
            }       
    }
}

}
creatingObjects();

function game() {
    for(temperature = 0; temperature < 20; temperature++){
        if(temperature == 10){
            weather = "աշուն";
        }
    }
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }


    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }

    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].eat();
        }
    }

    if (charac4Arr[0] !== undefined) {
        for (var i in charac4Arr) {
            charac4Arr[i].eat();
        }
    }

    if (charac5Arr[0] !== undefined) {
        for (var i in charac5Arr) {
            charac5Arr[i].eat();
        }
    }

    //! Object to send
    var sendData = {
        matrix: matrix,
        season: weather,
        grassCounter: grassHashiv,
        grassEaterCounter: grassEaterHashiv,
        predatorCounter: predatorHashiv,
        charac4Counter: charac4Hashiv,
        charac5Counter: charac5Hashiv
    }


    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}

setInterval(game, 1000);
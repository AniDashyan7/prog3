//! Setup function fires automatically
function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    //! Getting DOM objects (HTML elements)
    var grassCountElement = document.getElementById('grassCount');
    var grassEaterCountElement = document.getElementById('grassEaterCount');
    var predatorCountElement = document.getElementById('predatorCount');
    var character4CountElement = document.getElementById('character4Count');
    var character5CountElement = document.getElementById('character5Count');
    var Seasons = document.getElementById('weather');
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        Seasons.innerText = data.season;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        predatorCountElement.innerText = data.predatorCounter;
        character4CountElement.innerText = data.charac4Counter;
        character5CountElement.innerText = data.charac5Counter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side);
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('grey');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('yellow');
                    rect(j * side, i * side, side, side);
                }

                
            }
        }
    }
}
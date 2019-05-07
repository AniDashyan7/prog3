// var obj = {
//     "first_name": "Ani",
//     "last_name": "Dashyan",
//     "age": 15,
//     "tumo_student": true,
//     "greeting": function (){
//         console.log("Hello");
//     }
// }

// console.log(obj);
// console.log(obj.first_name);
// obj.greeting();

var side = 25;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված

let matrix = []; // Մատրիցի ստեղծում
let rows = 20; // Տողերի քանակ
let columns = 20; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում

for (let x = 0; x < columns; x++) {
    let a = Math.floor(Math.random()*100);

    if (a >= 0 && a < 20) {
    matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
    } 

    else if (a >= 20 && a < 40) {
    matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
    } 

    else if (a >= 40 && a < 50) {
    matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
    } 
}
}


function setup() {
    noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');

    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի  խոտակերների  և գիշատիչների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }

            else if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            }

        }
        }
    }

 function draw() {
    //Գծում է աշխարհը
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } 

            else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            }
        }
    }
}

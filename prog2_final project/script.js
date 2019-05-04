var side = 25;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var gishArr = []; // գիշատիչների զանգված
var kerp4Arr = []; // կերպար 4-ի զանգված
var kerp5Arr = []; // կերպար 5-ի զանգված



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
if (a >= 20 && a < 40) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
} 
else if (a >= 40 && a < 50) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
} 
else if (a >= 50 && a < 70) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
} 
else if(a >= 70 && a < 90) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
} 
else if(a >= 90 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
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

            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishArr.push(gishatich);
            } 

            else if (matrix[y][x] == 4) {
                var norKerpar4 = new Kerpar4(x, y);
                kerp4Arr.push(norKerpar4);
            }

            else if (matrix[y][x] == 5) {
                var norKerpar5 = new Kerpar5(x, y);
                kerp5Arr.push(norKerpar5);
            }
             
        }
    }
}

function draw() {
    //Գծում է աշխարհը
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } 

            else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 4) {
                fill("purple");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 5) {
                fill("black");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
        }
    }


    //խոտը բազմանում է
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    //խոտակերը ուտում է խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }

    //գիշատիչը ուտում է խոտակերին
    for (var i in gishArr) {
        gishArr[i].eat();
    }

    //կերպարը ուտում է խոտերին ու խոտակերներին
    for (var i in kerp4Arr) {
        kerp4Arr[i].eat();
    }

    for (var i in kerp5Arr) {
        kerp5Arr[i].eat();
    }
}
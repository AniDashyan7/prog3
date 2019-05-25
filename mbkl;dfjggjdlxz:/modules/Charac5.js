var LiveForm = require("./LiveForm");
var random = require("./random");

// կերպար 5-ի կլասը
module.exports = class Character5 extends LiveForm{
    constructor(x,y){
        super(x,y);
        this.energy = 25;
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(character) {
        this.newDirections();
        return super.getDirections(character);
    }

    move() {
        //որոնում է դատարկ տարածքներ
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            charac5Hashiv++;
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
        }
    }

    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords = this.getDirections(3);
        var cord = random(fundCords);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;
 
            //մեծացնում է էներգիան
            this.energy += 6;

            //սննդի զանգվածից ջնջում է կերված սնունդը
            for (var i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);   
                }

            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 30) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy -= 6;
            if (this.energy <= 0) { 
                this.die();
            }
        }
    }
   

    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;

        // ջնջում է ինքն իրեն
        for (var i in charac5Arr) {
            if (this.x == charac5Arr[i].x && this.y == charac5Arr[i].y) {
                charac5Arr.splice(i, 1);
            }
        }
    }
}
var LiveForm = require("./LiveForm");
var random = require("./random.js");

//կերպար 4-ի կլասը
module.exports = class Kerpar4 extends LiveForm{
    constructor(x,y){
        super(x, y);
        this.life = 20;
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

    chooseCell(character) {
        this.newDirections();
        return super.chooseCell(character);
    } 

     move() {
        //որոնում է դատարկ տարածքներ
        var fundCords = this.ChooseCell(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
        }
    }

    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords = this.ChooseCell(1)+this.ChooseCell(2);
        var cord = random(fundCords);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;
 
            //մեծացնում է էներգիան
            this.energy += 4;

            //սննդի զանգվածից ջնջում է կերված սնունդը
            for (var i in eatArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);   
                }

               else if(x == eatArr[i].x && y == eatArr[i].y){
                    eatArr.splice(i,1);
               } 
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 20) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy -= 4;
            if (this.energy <= 0) { 
                this.die();
            }
        }
    }

    mul() {
        //փնտրում է դատարկ տարածք
        var fundCords = this.ChooseCell(0);
        var cord = random(fundCords);

        //եթե կա բազմանում է
        if (cord){
            var x = cord[0];
            var y = cord[1];
            
            var norKerpar4 = new Kerpar4(x, y);
            kerp4Arr.push(norKerpar4);

           
            matrix[y][x] = 4;
          
        } 
    }

    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;

        // ջնջում է ինքն իրեն
        for (var i in kerp4Arr) {
            if (this.x == kerp4Arr[i].x && this.y == kerp4Arr[i].y) {
                kerp4Arr.splice(i, 1);
            }
        }
    }
}
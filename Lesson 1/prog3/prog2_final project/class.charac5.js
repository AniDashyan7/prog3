// կերպար 5-ի կլասը
class Kerpar5{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 12;
        this.directions =[];
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

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        //որոնում է դատարկ տարածքներ
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 5;
            var norKerpar = new Eatgrass(x,y);
            eatArr.push(norKerpar);
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
            for (var i in gishArr) {
                if (x == gishArr[i].x && y == gishArr[i].y) {
                    gishArr.splice(i, 1);   
                }

            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 25) {
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
        for (var i in kerp5Arr) {
            if (this.x == kerp5Arr[i].x && this.y == kerp5Arr[i].y) {
                kerp5Arr.splice(i, 1);
            }
        }
    }
}
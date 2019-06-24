class Box {
   constructor(x,y,z,r_){
       this.x = x;
       this.y = y;
       this.z = z;
       this.r = r_;

       this.pos = createVector(this.x,this.y,this.z);
   }

   generate(){
        var boxes = [];

       for(  var x = -1; x < 2; x++){
        for(var y = -1; y < 2; y++){
            for(var z = -1; z < 2; z++){
                var newR = this.r/3;
                b = new Box(this.pos.x + x*this.newR,this.pos.y + y*this.newR,this.pos.z + z*this.newR, newR);
                boxes.push(b);

        }
        }
       }

       return this.boxes;
   }

   show(){
       push();
       translate(this.pos.x,this.pos.y,this.pos.z);
       box(this.r);
       pop();
   }
}
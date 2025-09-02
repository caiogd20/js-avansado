let out = document.getElementById('out');
function Foma(x,y){
    this.x = x;
    this.y = y;
}
let f1 = new Foma(10,20);
console.log(f1);



Foma.prototype.move=function(x,y){
    this.x += x;
    this.y += y;
}
f1.move(100,200);
console.log(f1);
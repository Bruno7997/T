class Block{
constructor(A,B){
this.A=A
this.B=B
this.sprite=createSprite(this.A/size[0]*width+width/(2*size[0]),this.B/size[1]*height+height/(2*size[1]),width/size[0],height/size[1])
this.sprite.shapeColor="black"
this.neighbors={}
}
neighborsAdd2(){
for(var K=-1;K<2;K+=1){if(Cells[this.A+K]==undefined){continue}; 
for(var F=-1;F<2;F+=1){if(Cells[this.A+K][this.B+F]==undefined){continue}
if(!(K==0&&F==0)){this.neighbors.push(Cells[this.A+K][this.B+F])}}}
}

neighborsAdd(){
var d=["CE","E","EB","C",null,"B","DC","D","BD"]
var dn=0
for(var K=-1;K<2;K+=1){if(Cells[this.A+K]==undefined){dn+=3;continue}; 
for(var F=-1;F<2;F+=1){if(Cells[this.A+K][this.B+F]==undefined||(K==0&&F==0)){dn+=1;continue}
if(!diagonalPath){if(K==F||K==-F){dn+=1;continue}}
this.neighbors[d[dn]]=Cells[this.A+K][this.B+F];dn+=1}}
}


}

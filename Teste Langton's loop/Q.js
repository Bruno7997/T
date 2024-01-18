class Block{
constructor(A,B){
this.A=A
this.B=B
//this.sprite=createSprite(this.A*0.1*width+width*0.05,this.B*0.1*height+height*0.05,width/10,height/10)
this.sprite=createSprite(this.A/size[0]*width+width/(2*size[0]),this.B/size[1]*height+height/(2*size[1]),width/size[0],height/size[1])
this.sprite.shapeColor="black"
this.state="dead"
this.neighbors=[]

if(Type=="solo"){this.check=setInterval((A,B)=>{if(state==1){
var N=0;for(var n in Cells[A][B].neighbors){if(Cells[A][B].neighbors[n].state=="alive"){N+=1}}

if(Cells[A][B].state=="dead"){
if(N==3){Al(Cells[A][B])}
}

if(Cells[A][B].state=="alive"){
if(N<=1||N>=4){De(Cells[A][B])}
//if(N==2||N==3){Al(Cells[A][B])}
}
}},1,this.A,this.B)}
}

static async F(){
var D=[],R=[]

for(var a in Cells){for(var aa in Cells[a]){
var N=0;for(var n in await Cells[a][aa].neighbors){if(await Cells[a][aa].neighbors[n].state=="alive"){N+=1}}

if(await Cells[a][aa].state=="dead"){
if(N==3){R.push([a,aa])}
}

if(await Cells[a][aa].state=="alive"){
if(N<=1||N>=4){D.push([a,aa])}
//if(N==2||N==3){Al(Cells[a][aa])}
}

}}

for(var d in D){De(Cells[D[d][0]][D[d][1]])}
for(var r in R){Al(Cells[R[r][0]][R[r][1]])}

}
}

//https://youtu.be/xsLX390SJM4
//Rules:
//1 - Live cell with one or less neighbors => Die(loneliness)
//2 - Live cell with four or more neighbors => Die(overcrowding)
//3 - Live cell with three or two neighbors => Survive
//4 - Dead cell with three neighbors => Reborn(reproduction)
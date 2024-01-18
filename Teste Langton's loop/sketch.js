var canvas
var state=0
var Type="solo"
var size=[100,100];if(size[0]<10){size[0]=10};if(size[1]<10){size[1]=10}
var Cells=[]

function preload() {
  
}

async function setup() {
canvas = await createCanvas(windowWidth, windowHeight);
for(var a=0;a<size[0];a+=1){Cells.push([]);for(var b=0;b<size[1];b+=1){Cells[a][b]=new Block(a,b)}}

for(var a in Cells){for(var aa in Cells[a]){
for(var K=-1;K<2;K+=1){if(Cells[Number(a)+K]==undefined){continue}; 
for(var F=-1;F<2;F+=1){if(Cells[Number(a)+K][Number(aa)+F]==undefined){continue}
if(!(K==0&&F==0)){await Cells[a][aa].neighbors.push(Cells[Number(a)+K][Number(aa)+F])}}}}}

//for(var a in Cells){for(var aa in Cells[a]){if(Math.floor(random(0,1.5))==1){Cells[a][aa].state="alive";Cells[a][aa].sprite.shapeColor="white"}}}
createType("normal")

//console.log(Cells)
if(Type=="solo"){setTimeout(()=>{state=1},2500)}
if(Type=="static"){setTimeout(()=>{setInterval(()=>{Block.F()},100)},2500)}
}

function draw() {background(200,200,200);
//for(var a in A){for(var aa in A[a]){if(A[a][aa]==0){fill("black")}else{fill("white")}rect(a*width/10,aa*height/10,width/10,height/10)}}


drawSprites()
}

function Al(A){A.state="alive";A.sprite.shapeColor="white"}
function De(A){A.state="dead";A.sprite.shapeColor="black"}

function createType(T){//A=h, B=v
var A=Math.floor(Cells.length/4),B=Math.floor(Cells[Cells.length-1].length/1.5)
if(T=="normal"){
Al(Cells[A][B])
Al(Cells[A+2][B]);Al(Cells[A+2][B-1])
Al(Cells[A+4][B-2]);Al(Cells[A+4][B-3]);Al(Cells[A+4][B-4])
Al(Cells[A+6][B-2]);Al(Cells[A+6][B-3]);Al(Cells[A+6][B-4]);Al(Cells[A+7][B-3])}

if(T=="oscilation"){Al(Cells[A+1][B]);Al(Cells[A][B]);Al(Cells[A-1][B])}

if(T=="glider"){
Al(Cells[A][B]);Al(Cells[A][B+2])
Al(Cells[A-1][B+1]);Al(Cells[A-1][B+2])
Al(Cells[A-2][B+1])
}

if(T=="heart"){
Al(Cells[A+1][B-1]);Al(Cells[A-2][B-1])
Al(Cells[A][B-2]);Al(Cells[A-1][B-2])
Al(Cells[A][B]);Al(Cells[A-3][B])
Al(Cells[A][B+2]);Al(Cells[A-1][B+2])
Al(Cells[A+1][B+1]);Al(Cells[A-2][B+1])
}
if(T=="full heart"){
Al(Cells[A][B-2]);Al(Cells[A-1][B-2]);
Al(Cells[A+1][B-1]);Al(Cells[A][B-1]);Al(Cells[A-1][B-1]);Al(Cells[A-2][B-1])
Al(Cells[A][B]);Al(Cells[A-1][B]);Al(Cells[A-2][B]);Al(Cells[A-3][B])
Al(Cells[A+1][B+1]);Al(Cells[A][B+1]);Al(Cells[A-1][B+1]);Al(Cells[A-2][B+1])
Al(Cells[A][B+2]);Al(Cells[A-1][B+2]);
}

if(T=="1 2 3"){
Al(Cells[A-1][B]);Al(Cells[A][B]);Al(Cells[A+1][B])
Al(Cells[A][B-1]);Al(Cells[A][B-2]);Al(Cells[A][B-3]);Al(Cells[A][B-4])
Al(Cells[A-1][B-3])

Al(Cells[A+9][B]);Al(Cells[A+10][B]);Al(Cells[A+11][B])
Al(Cells[A+10][B-1])
Al(Cells[A+11][B-2]);Al(Cells[A+11][B-3])
Al(Cells[A+9][B-4]);Al(Cells[A+10][B-4])
Al(Cells[A+9][B-3])

Al(Cells[A+20][B]);Al(Cells[A+21][B]);Al(Cells[A+22][B])
Al(Cells[A+22][B-1])
Al(Cells[A+20][B-2]);Al(Cells[A+21][B-2]);Al(Cells[A+22][B-2])
Al(Cells[A+22][B-3])
Al(Cells[A+20][B-4]);Al(Cells[A+21][B-4]);Al(Cells[A+22][B-4])
}

}
var canvas
var size=[5,5]
var Cells=[]//A=x(esquerda),B=y(cima)
var diagonalPath=false
var Path=[],Avoid=[],caminho=[]

function preload() {
  
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
for(var a=0;a<size[0];a+=1){Cells.push([]);for(var b=0;b<size[1];b+=1){Cells[a][b]=new Block(a,b)}}
for(var a in Cells){for(var aa in Cells[a]){Cells[a][aa].neighborsAdd()}}

console.log(Cells)
Cells[0][0].sprite.shapeColor="green"
Cells[size[0]-1][size[1]-1].sprite.shapeColor="red"
if(findPath([0,0],[4,4])){caminho.push([4,4])}
Path.push(caminho)
console.log("--------")
console.log(Path)
}

function draw() {background(200,200,200);



drawSprites()
drawPath()
}

//Tentei 2 modelos de "findPath", ambos com o mesmo objetivo

function findPath(At,F){caminho.push([At[0],At[1]]);Cells[At[0]][At[1]].sprite.shapeColor="yellow"
this.D=directions()
for(var t=0;t<Object.keys(Cells[At[0]][At[1]].neighbors).length;t=t){this.rept=false
this.d=this.D.next().value; if(this.d==undefined){break}
this.N=Cells[At[0]][At[1]].neighbors[this.d]; if(this.N==undefined){continue}
console.log("---W---");console.log(this.N.A+" "+this.N.B);

for(var c in caminho){if(this.N.A==caminho[c][0]&&this.N.B==caminho[c][1]){this.rept=true;break}}if(this.rept){console.log("REPT");continue}
for(var c in Avoid){if(this.N.A==Avoid[c][0]&&this.N.B==Avoid[c][1]){this.rept=true;break}}if(this.rept){console.log("REPT");continue}
console.log("TESTAR PROXIMO")
if((this.N.A==F[0]&&this.N.B==F[1])||findPath([this.N.A,this.N.B],F)){return true}
console.log("APESAR< PROXIMA CONEXÃO do"+At[0]+" "+At[1])
t+=1
}
console.log("FALHA do"+At[0]+" "+At[1])
caminho.pop();Avoid.push([At[0],At[1]]);Cells[At[0]][At[1]].sprite.shapeColor="purple"
return false
}

async function findPath2(At,F){caminho.push([At[0],At[1]]);Cells[At[0]][At[1]].sprite.shapeColor="yellow"
for(var N in Cells[At[0]][At[1]].neighbors){if(Cells[At[0]][At[1]].neighbors[N]==undefined){continue};this.rept=false
for(var c in caminho){if(Cells[At[0]][At[1]].neighbors[N].A==caminho[c][0]&&Cells[At[0]][At[1]].neighbors[N].B==caminho[c][1]){this.rept=true;break}}if(this.rept){console.log("REPT");continue}
for(var c in Avoid){if(Cells[At[0]][At[1]].neighbors[N].A==Avoid[c][0]&&Cells[At[0]][At[1]].neighbors[N].B==Avoid[c][1]){this.rept=true;break}}if(this.rept){console.log("REPT");continue}

this.N=Cells[At[0]][At[1]].neighbors[N]
console.log("---W---");console.log(this.N.A+" "+this.N.B);
//for(var c in caminho){if(this.N.A==caminho[c][0]&&this.N.B==caminho[c][1]){this.rept=true;break}}if(this.rept){console.log("REPT");continue}
//for(var c in Avoid){if(this.N.A==Avoid[c][0]&&this.N.B==Avoid[c][1]){this.rept=true;break}}if(this.rept){console.log("REPT");continue}
console.log("TESTAR PROXIMO")
if((this.N.A==F[0]&&this.N.B==F[1])||await findPath([this.N.A,this.N.B],F)){return true}
console.log("APESAR< PROXIMA CONEXÃO do"+At[0]+" "+At[1])

}
console.log("FALHA do"+At[0]+" "+At[1])
caminho.pop();Avoid.push([At[0],At[1]]);Cells[At[0]][At[1]].sprite.shapeColor="purple"
return false
}

function* directions() {var A=["E","D","B","C"]; while(true){yield A.splice(Math.floor(random(A.length)),1)[0]}}



function drawPath(){
for(var p in Path){for(var P=0;P<Path[p].length-1;P+=1){
push()
stroke("blue")
line(Cells[Path[p][P][0]][Path[p][P][1]].sprite.position.x,Cells[Path[p][P][0]][Path[p][P][1]].sprite.position.y,Cells[Path[p][P+1][0]][Path[p][P+1][1]].sprite.position.x,Cells[Path[p][P+1][0]][Path[p][P+1][1]].sprite.position.y)
pop()
}}
}




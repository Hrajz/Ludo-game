const body = document.querySelector('.body');
// body.innerHTML="";

const blueDir = [
    {x:14,y:7},{x:13,y:7},{x:12,y:7},{x:11,y:7},{x:10,y:7},{x:9,y:6},{x:9,y:5},{x:9,y:4},{x:9,y:3},{x:9,y:2},{x:9,y:1},{x:8,y:1},{x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:7,y:5},{x:7,y:6},{x:6,y:7},{x:5,y:7},{x:4,y:7},{x:3,y:7},{x:2,y:7},{x:1,y:7},{x:1,y:8},{x:1,y:9},{x:2,y:9},{x:3,y:9},{x:4,y:9},{x:5,y:9},{x:6,y:9},{x:7,y:10},{x:7,y:11},{x:7,y:12},{x:7,y:13},{x:7,y:14},{x:7,y:15},{x:8,y:15},{x:9,y:15},{x:9,y:14},{x:9,y:13},{x:9,y:12},{x:9,y:11},{x:9,y:10},{x:10,y:9},{x:11,y:9},{x:12,y:9},{x:13,y:9},{x:14,y:9},{x:15,y:9},{x:15,y:8},{x:14,y:8},{x:13,y:8},{x:12,y:8},{x:11,y:8},{x:10,y:8},{x:9,y:8}
];
const redDir = [
    {x:7,y:2},{x:7,y:3},{x:7,y:4},{x:7,y:5},{x:7,y:6},{x:6,y:7},{x:5,y:7},{x:4,y:7},{x:3,y:7},{x:2,y:7},{x:1,y:7},{x:1,y:8},{x:1,y:9},{x:2,y:9},{x:3,y:9},{x:4,y:9},{x:5,y:9},{x:6,y:9},{x:7,y:10},{x:7,y:11},{x:7,y:12},{x:7,y:13},{x:7,y:14},{x:7,y:15},{x:8,y:15},{x:9,y:15},{x:9,y:14},{x:9,y:13},{x:9,y:12},{x:9,y:11},{x:9,y:10},{x:10,y:9},{x:11,y:9},{x:12,y:9},{x:13,y:9},{x:14,y:9},{x:15,y:9},{x:15,y:8},{x:15,y:7},{x:14,y:7},{x:13,y:7},{x:12,y:7},{x:11,y:7},{x:10,y:7},{x:9,y:6},{x:9,y:5},{x:9,y:4},{x:9,y:3},{x:9,y:2},{x:9,y:1},{x:8,y:1},{x:8,y:2},{x:8,y:3},{x:8,y:4},{x:8,y:5},{x:8,y:6},{x:8,y:7}
];
const greenDir = [
    {x:2,y:9},{x:3,y:9},{x:4,y:9},{x:5,y:9},{x:6,y:9},{x:7,y:10},{x:7,y:11},{x:7,y:12},{x:7,y:13},{x:7,y:14},{x:7,y:15},{x:8,y:15},{x:9,y:15},{x:9,y:14},{x:9,y:13},{x:9,y:12},{x:9,y:11},{x:9,y:10},{x:10,y:9},{x:11,y:9},{x:12,y:9},{x:13,y:9},{x:14,y:9},{x:15,y:9},{x:15,y:8},{x:15,y:7},{x:14,y:7},{x:13,y:7},{x:12,y:7},{x:11,y:7},{x:10,y:7},{x:9,y:6},{x:9,y:5},{x:9,y:4},{x:9,y:3},{x:9,y:2},{x:9,y:1},{x:8,y:1},{x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:7,y:5},{x:7,y:6},{x:6,y:7},{x:5,y:7},{x:4,y:7},{x:3,y:7},{x:2,y:7},{x:1,y:7},{x:1,y:8},{x:2,y:8},{x:3,y:8},{x:4,y:8},{x:5,y:8},{x:6,y:8},{x:7,y:8}
];
const yellowDir = [
    {x:9,y:14},{x:9,y:13},{x:9,y:12},{x:9,y:11},{x:9,y:10},{x:10,y:9},{x:11,y:9},{x:12,y:9},{x:13,y:9},{x:14,y:9},{x:15,y:9},{x:15,y:8},{x:15,y:7},{x:14,y:7},{x:13,y:7},{x:12,y:7},{x:11,y:7},{x:10,y:7},{x:9,y:6},{x:9,y:5},{x:9,y:4},{x:9,y:3},{x:9,y:2},{x:9,y:1},{x:8,y:1},{x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:7,y:5},{x:7,y:6},{x:6,y:7},{x:5,y:7},{x:4,y:7},{x:3,y:7},{x:2,y:7},{x:1,y:7},{x:1,y:8},{x:1,y:9},{x:2,y:9},{x:3,y:9},{x:4,y:9},{x:5,y:9},{x:6,y:9},{x:7,y:10},{x:7,y:11},{x:7,y:12},{x:7,y:13},{x:7,y:14},{x:7,y:15},{x:8,y:15},{x:8,y:14},{x:8,y:13},{x:8,y:12},{x:8,y:11},{x:8,y:10},{x:8,y:9}
];
let position_array = [
    {
        pos: 0.1,
        player: []
    }
];

let dice = 0;
let player1 = true;
let player2 = true;
let player3 = false;
let player4 = false;

let position = {
    r1:0,r2:-1,r3:-1,r4:-1,b1:-1,b2:-1,b3:-1,b4:-1,g1:-1,g2:-1,g3:-1,g4:-1,y1:-1,y2:-1,y3:-1,y4:-1,
}
//-------------------------------------------- getting all goti's------------------------------------------

const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');

const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');

const y1 = document.getElementById('y1');
const y2 = document.getElementById('y2');
const y3 = document.getElementById('y3');
const y4 = document.getElementById('y4');

// getting same color together 

const yellow = document.getElementsByClassName('yellow');
const blue = document.getElementsByClassName('blue');
const green = document.getElementsByClassName('green');
const red = document.getElementsByClassName('red')

// variables 

const board = document.querySelector('.board');
const audio  = new Audio('multimedia/move.mp3');
let movement;
const redPic = document.getElementsByClassName('player1');
const greenPic = document.getElementsByClassName('player2');
const yellowPic = document.getElementsByClassName('player3');
const bluePic = document.getElementsByClassName('player4');

// ---------------------------------------   goti click------------------------------------------------------

// red player clicks

r1.addEventListener("click", ()=>{
    row = getComputedStyle(r1).getPropertyValue("grid-row-start");
    col = getComputedStyle(r1).getPropertyValue("grid-column-start");
    if( row === '3' && col === '2' && player1 === true){
        if(dice === 6 ){
            playerMove(r1);
        }
    }
    else if(player1 === true){
        playerMove(r1);
    }
});

r2.addEventListener("click", ()=>{
    row = getComputedStyle(r2).getPropertyValue("grid-row-start");
    col = getComputedStyle(r2).getPropertyValue("grid-column-start");
    if( row === '2' && col === '3' && player1 === true){
        if(dice === 6 ){
            playerMove(r2);
        }
    }
    else if(player1 === true){
        playerMove(r2);
    }
});

r3.addEventListener("click", ()=>{
    row = getComputedStyle(r3).getPropertyValue("grid-row-start");
    col = getComputedStyle(r3).getPropertyValue("grid-column-start");
    if( row === '3' && col === '4' && player1 === true){
        if(dice === 6 ){
            playerMove(r3);
        }
    }
    else if(player1 === true){
        playerMove(r3);
    }
});
r4.addEventListener("click", ()=>{
    row = getComputedStyle(r4).getPropertyValue("grid-row-start");
    col = getComputedStyle(r4).getPropertyValue("grid-column-start");
    if( row === '4' && col === '3' && player1 === true){
        if(dice === 6 ){
            playerMove(r4);
        }
    }
    else if(player1 === true){
        playerMove(r4);
    }
});

// green player clicks

g1.addEventListener("click", ()=>{
    row = getComputedStyle(g1).getPropertyValue("grid-row-start");
    col = getComputedStyle(g1).getPropertyValue("grid-column-start");
    if( row === '3' && col === '11' && player2 === true){
        if(dice === 6 ){
            playerMove(g1);
        }
    }
    else if(player2 === true){
        playerMove(g1);
    }
});

g2.addEventListener("click", ()=>{
    row = getComputedStyle(g2).getPropertyValue("grid-row-start");
    col = getComputedStyle(g2).getPropertyValue("grid-column-start");
    if( row === '2' && col === '12' && player2 === true){
        if(dice === 6 ){
            playerMove(g2);
        }
    }
    else if(player2 === true){
        playerMove(g2);
    }
});

g3.addEventListener("click", ()=>{
    row = getComputedStyle(g3).getPropertyValue("grid-row-start");
    col = getComputedStyle(g3).getPropertyValue("grid-column-start");
    if( row === '3' && col === '13' && player2 === true){
        if(dice === 6 ){
            playerMove(g3);
        }
    }
    else if(player2 === true){
        playerMove(g3);
    }
});
g4.addEventListener("click", ()=>{
    row = getComputedStyle(g4).getPropertyValue("grid-row-start");
    col = getComputedStyle(g4).getPropertyValue("grid-column-start");
    if( row === '4' && col === '12' && player2 === true){
        if(dice === 6 ){
            playerMove(g4);
        }
    }
    else if(player2 === true){
        playerMove(g4);
    }
});

// yellow player clicks

y1.addEventListener("click", ()=>{
    row = getComputedStyle(y1).getPropertyValue("grid-row-start");
    col = getComputedStyle(y1).getPropertyValue("grid-column-start");
    if( row === '12' && col === '11' && player3 === true){
        if(dice === 6 ){
            playerMove(y1);
        }
    }
    else if(player3 === true){
        playerMove(y1);
    }
});

y2.addEventListener("click", ()=>{
    row = getComputedStyle(y2).getPropertyValue("grid-row-start");
    col = getComputedStyle(y2).getPropertyValue("grid-column-start");
    if( row === '11' && col === '12' && player3 === true){
        if(dice === 6 ){
            playerMove(y2);
        }
    }
    else if(player3 === true){
        playerMove(y2);
    }
});

y3.addEventListener("click", ()=>{
    row = getComputedStyle(y3).getPropertyValue("grid-row-start");
    col = getComputedStyle(y3).getPropertyValue("grid-column-start");
    if( row === '12' && col === '13' && player3 === true){
        if(dice === 6 ){
            playerMove(y3);
        }
    }
    else if(player3 === true){
        playerMove(y3);
    }
});
y4.addEventListener("click", ()=>{
    row = getComputedStyle(y4).getPropertyValue("grid-row-start");
    col = getComputedStyle(y4).getPropertyValue("grid-column-start");
    if( row === '13' && col === '12' && player3 === true){
        if(dice === 6 ){
            playerMove(y4);
        }
    }
    else if(player3 === true){
        playerMove(y4);
    }
});

// blue player clicks

b1.addEventListener("click", ()=>{
    row = getComputedStyle(b1).getPropertyValue("grid-row-start");
    col = getComputedStyle(b1).getPropertyValue("grid-column-start");
    if( row === '12' && col === '2' && player4 === true){
        if(dice === 6 ){
            playerMove(b1);
        }
    }
    else if(player4 === true){
        playerMove(b1);
    }
});

b2.addEventListener("click", ()=>{
    row = getComputedStyle(b2).getPropertyValue("grid-row-start");
    col = getComputedStyle(b2).getPropertyValue("grid-column-start");
    if( row === '11' && col === '3' && player4 === true){
        if(dice === 6 ){
            playerMove(b2);
        }
    }
    else if(player4 === true){
        playerMove(b2);
    }
});

b3.addEventListener("click", ()=>{
    row = getComputedStyle(b3).getPropertyValue("grid-row-start");
    col = getComputedStyle(b3).getPropertyValue("grid-column-start");
    if( row === '12' && col === '4' && player4 === true){
        if(dice === 6 ){
            playerMove(b3);
        }
    }
    else if(player4 === true){
        playerMove(b3);
    }
});
b4.addEventListener("click", ()=>{
    row = getComputedStyle(b4).getPropertyValue("grid-row-start");
    col = getComputedStyle(b4).getPropertyValue("grid-column-start");
    if( row === '13' && col === '3' && player4 === true){
        if(dice === 6 ){
            playerMove(b4);
        }
    }
    else if(player4 === true){
        playerMove(b4);
    }
});

// --------------------------------moving the player goti-----------------------------------------------------


function move(pos,movement,btn){

// red
    if(btn.classList[0] === 'red'){
        if(pos < movement){
            setTimeout(()=>{
                btn.style.gridRowStart = redDir[pos+1].x;
                btn.style.gridColumnStart = redDir[pos+1].y;
                audio.play();
                move(pos+1,movement,btn);
            },500);
    }
    }
    // green
    if(btn.classList[0] === 'green'){
        if(pos < movement){
            setTimeout(()=>{
                btn.style.gridRowStart = greenDir[pos+1].x;
                btn.style.gridColumnStart = greenDir[pos+1].y;
                audio.play();
                move(pos+1,movement,btn);
            },500);
    }
    }
    // yellow
    if(btn.classList[0] === 'yellow'){
        if(pos < movement){
            setTimeout(()=>{
                btn.style.gridRowStart = yellowDir[pos+1].x;
                btn.style.gridColumnStart = yellowDir[pos+1].y;
                audio.play();
                move(pos+1,movement,btn);
            },500);
    }
    }
    // blue
    if(btn.classList[0] === 'blue'){
        if(pos < movement){
            setTimeout(()=>{
                btn.style.gridRowStart = blueDir[pos+1].x;
                btn.style.gridColumnStart = blueDir[pos+1].y;
                audio.play();
                move(pos+1,movement,btn);
            },500);
    }
    }
}

// ------------------------- cut function--------------------------





// --------------------------------dice roll ---------------------------------------- 



if(player1 === true)redPic[0].classList.add('animate2');
function diceRoll(player){
    let row;
    let col;
    if(player === 'player1' && player1 === true){
        dice = 1 + Math.floor(Math.random()*6);
        console.log(dice);
        for(let i=0; i<red.length ; i++){
            if(red[i].id === 'r1'){
                pos = position.r1;
                row = getComputedStyle(r1).getPropertyValue("grid-row-start");
                col = getComputedStyle(r1).getPropertyValue("grid-column-start");
            }
            if(red[i].id === 'r2'){
                pos = position.r2;
                row = getComputedStyle(r2).getPropertyValue("grid-row-start");
                col = getComputedStyle(r2).getPropertyValue("grid-column-start");
            }
            if(red[i].id === 'r3'){
                pos = position.r3;
                row = getComputedStyle(r3).getPropertyValue("grid-row-start");
                col = getComputedStyle(r3).getPropertyValue("grid-column-start");
            }
            if(red[i].id === 'r4'){
                pos = position.r4;
                row = getComputedStyle(r4).getPropertyValue("grid-row-start");
                col = getComputedStyle(r4).getPropertyValue("grid-column-start");
            }
                if((row === '2' && col === '3') || (row === '3' && (col === '2' || col === '4') ) || (row === '4' && col === '3')) {
                    if(dice === 6){
                        red[i].classList.add('animate');
                    }
                }
                else if(pos + dice < 57){
                    red[i].classList.add('animate');
                }
        }
        if(dice != 6 && position.r1 === -1 && position.r2 === -1 && position.r3 === -1 && position.r4 === -1){
            player1 = false;
            player2 = true;
            redPic[0].classList.remove('animate2');
            greenPic[0].classList.add('animate2');
            
        }
    }

    else if(player === 'player2' && player2 === true){
        dice = 1 + Math.floor(Math.random()*6);
        console.log(dice);
        for(let i=0; i<green.length ; i++){
            if(green[i].id === 'g1'){
                pos = position.g1;
                row = getComputedStyle(g1).getPropertyValue("grid-row-start");
                col = getComputedStyle(g1).getPropertyValue("grid-column-start");
            }
            if(green[i].id === 'g2'){
                pos = position.g2;
                row = getComputedStyle(g2).getPropertyValue("grid-row-start");
                col = getComputedStyle(g2).getPropertyValue("grid-column-start");
            }
            if(green[i].id === 'g3'){
                pos = position.g3;
                row = getComputedStyle(g3).getPropertyValue("grid-row-start");
                col = getComputedStyle(g3).getPropertyValue("grid-column-start");
            }
            if(green[i].id === 'g4'){
                pos = position.g4;
                row = getComputedStyle(g4).getPropertyValue("grid-row-start");
                col = getComputedStyle(g4).getPropertyValue("grid-column-start");
            }

                if((row === '2' && col === '12') || (row === '3' && (col === '11' || col === '13') ) || (row === '4' && col === '12')) {
                    if(dice === 6){
                        green[i].classList.add('animate');
                    }
                }
                else if(pos + dice < 57){
                    green[i].classList.add('animate');
                }
        }
        if(dice != 6 && position.g1 === -1 && position.g2 === -1 && position.g3 === -1 && position.g4 === -1){
            player2 = false;
            player3 = true
            greenPic[0].classList.remove('animate2');
            yellowPic[0].classList.add('animate2');
        }
    }

    if(player === 'player3' && player3 === true){
        dice = 1 + Math.floor(Math.random()*6);
        console.log(dice);
        for(let i=0; i<yellow.length ; i++){
            if(yellow[i].id === 'y1'){
                pos = position.y1;
                row = getComputedStyle(y1).getPropertyValue("grid-row-start");
                col = getComputedStyle(y1).getPropertyValue("grid-column-start");
            }
            if(yellow[i].id === 'y2'){
                pos = position.y2;
                row = getComputedStyle(y2).getPropertyValue("grid-row-start");
                col = getComputedStyle(y2).getPropertyValue("grid-column-start");
            }
            if(yellow[i].id === 'y3'){
                pos = position.y3;
                row = getComputedStyle(y3).getPropertyValue("grid-row-start");
                col = getComputedStyle(y3).getPropertyValue("grid-column-start");
            }
            if(yellow[i].id === 'y4'){
                pos = position.y4;
                row = getComputedStyle(y4).getPropertyValue("grid-row-start");
                col = getComputedStyle(y4).getPropertyValue("grid-column-start");
            }

                if((row === '11' && col === '12') || (row === '12' && (col === '11' || col === '13') ) || (row === '13' && col === '12')) {
                    if(dice === 6){
                        yellow[i].classList.add('animate');
                    }
                }
                else if(pos + dice < 57){
                    yellow[i].classList.add('animate');
                }
        }
        if(dice != 6 && position.y1 === -1 && position.y2 === -1 && position.y3 === -1 && position.y4 === -1){
            player3 = false;
            player4 = true
            yellowPic[0].classList.remove('animate2');
            bluePic[0].classList.add('animate2');
        }
    }
    if(player === 'player4' && player4 === true){
        dice = 1 + Math.floor(Math.random()*6);
        console.log(dice);
        for(let i=0; i<blue.length ; i++){
            if(blue[i].id === 'b1'){
                pos = position.b1;
                row = getComputedStyle(b1).getPropertyValue("grid-row-start");
                col = getComputedStyle(b1).getPropertyValue("grid-column-start");
            }
            if(blue[i].id === 'b2'){
                pos = position.b2;
                row = getComputedStyle(b2).getPropertyValue("grid-row-start");
                col = getComputedStyle(b2).getPropertyValue("grid-column-start");
            }
            if(blue[i].id === 'b3'){
                pos = position.b3;
                row = getComputedStyle(b3).getPropertyValue("grid-row-start");
                col = getComputedStyle(b3).getPropertyValue("grid-column-start");
            }
            if(blue[i].id === 'b4'){
                pos = position.b4;
                row = getComputedStyle(b4).getPropertyValue("grid-row-start");
                col = getComputedStyle(b4).getPropertyValue("grid-column-start");
            }

                if((row === '11' && col === '3') || (row === '12' && (col === '2' || col === '4') ) || (row === '13' && col === '3')) {
                    if(dice === 6){
                        blue[i].classList.add('animate');
                    }
                }
                else if(pos + dice < 57){
                    blue[i].classList.add('animate');
                }
        }
        if(dice != 6 && position.b1 === -1 && position.b2 === -1 && position.b3 === -1 && position.b4 === -1){
            player4 = false;
            player1 = true;
            bluePic[0].classList.remove('animate2');
            redPic[0].classList.add('animate2');
        }
    }
};

//--------------------------------------- player move function-----------------------------------------------------

function playerMove(btn){
   let val =  btn.id;

//    -------------------------------red-------------------------------------
   if(val === 'r1'){

        row = getComputedStyle(r1).getPropertyValue("grid-row-start");
        col = getComputedStyle(r1).getPropertyValue("grid-column-start");
        if( row === '3' && col === '2'){
            if(dice === 6){
                r1.style.top = 0;
                r1.style.left = 0;
                position.r1=0;
                r1.style.gridRowStart = 7;
                r1.style.gridColumnStart = 2;
                dice = 0;
            }
        }
        else{
            movement = dice+position.r1;
            if(movement < 57){
                move(position.r1, movement,btn);
                position.r1 += dice;

                
            }
            if(dice != 6){
                player1 = false;
                player2 = true;
                redPic[0].classList.remove('animate2');
                greenPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'r2'){

        row = getComputedStyle(r2).getPropertyValue("grid-row-start");
        col = getComputedStyle(r2).getPropertyValue("grid-column-start");
        if( row === '2' && col === '3' ){
            if(dice === 6){
                r2.style.top = 0;
                r2.style.left = 0;
                position.r2=0;
                r2.style.gridRowStart = 7;
                r2.style.gridColumnStart = 2;
                dice = 0;
            }
        }
        else{
            movement = dice+position.r2;
            if(movement < 57){
                move(position.r2, movement,btn);
                position.r2 += dice;
            }
             if(dice != 6){
                player1 = false;
                player2 = true;
                redPic[0].classList.remove('animate2');
                greenPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'r3'){

        row = getComputedStyle(r3).getPropertyValue("grid-row-start");
        col = getComputedStyle(r3).getPropertyValue("grid-column-start");
        if( row === '3' && col === '4' ){
            if(dice === 6){
                r3.style.top = 0;
                r3.style.left = 0;
                position.r3=0;
                r3.style.gridRowStart = 7;
                r3.style.gridColumnStart = 2;
                dice = 0;
            }
        }
        else{
            movement = dice+position.r3;
            if(movement < 57){
                move(position.r3, movement,btn);
                position.r3 += dice;
            }
             if(dice != 6){
                player1 = false;
                player2 = true;
                redPic[0].classList.remove('animate2');
                greenPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'r4'){

    row = getComputedStyle(r4).getPropertyValue("grid-row-start");
    col = getComputedStyle(r4).getPropertyValue("grid-column-start");
    if( row === '4' && col === '3' ){
        if(dice === 6){
            r4.style.top = 0;
            r4.style.left = 0;
            position.r4=0;
            r4.style.gridRowStart = 7;
            r4.style.gridColumnStart = 2;
            dice = 0;
        }
    }
    else{
        movement = dice+position.r4;
        if(movement < 57){
            move(position.r4, movement,btn);
            position.r4 += dice;
        }
         if(dice != 6){
                player1 = false;
                player2 = true;
                redPic[0].classList.remove('animate2');
                greenPic[0].classList.add('animate2');
            }
        dice = 0;
    }
   }
   for(let i=0; i<red.length ; i++){
       red[i].classList.remove('animate');
   }

//    --------------------------------------green -------------------------------------------------
   if(val === 'g1'){

        row = getComputedStyle(g1).getPropertyValue("grid-row-start");
        col = getComputedStyle(g1).getPropertyValue("grid-column-start");
        if( row === '3' && col === '11' ){
            if(dice === 6){
                g1.style.top = 0;
                g1.style.left = 0;
                position.g1=0;
                g1.style.gridRowStart = 2;
                g1.style.gridColumnStart = 9;
                dice = 0;
            }
        }
        else{
            movement = dice+position.g1;
            if(movement < 57){
                move(position.g1, movement,btn);
                position.g1 += dice;
            }
            if(dice != 6){
                player2 = false;
                player3 = true;
                greenPic[0].classList.remove('animate2');
                yellowPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'g2'){

        row = getComputedStyle(g2).getPropertyValue("grid-row-start");
        col = getComputedStyle(g2).getPropertyValue("grid-column-start");
        if( row === '2' && col === '12' ){
            if(dice === 6){
                g2.style.top = 0;
                g2.style.left = 0;
                position.g2=0;
                g2.style.gridRowStart = 2;
                g2.style.gridColumnStart = 9;
                dice = 0;
            }
        }
        else{
            if(movement < 57){
                move(position.g2, movement,btn);
                position.g2 += dice;
            }
             if(dice != 6){
                player2 = false;
                player3 = true;
                greenPic[0].classList.remove('animate2');
                yellowPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'g3'){

        row = getComputedStyle(g3).getPropertyValue("grid-row-start");
        col = getComputedStyle(g3).getPropertyValue("grid-column-start");
        if( row === '3' && col === '13' ){
            if(dice === 6){
                g3.style.top = 0;
                g3.style.left = 0;
                position.g3=0;
                g3.style.gridRowStart = 2;
                g3.style.gridColumnStart = 9;
                dice = 0;
            }
        }
        else{
            if(movement < 57){
                move(position.g3, movement,btn);
                position.g3 += dice;
            }
            position.g3 += dice;
             if(dice != 6){
                player2 = false;
                player3 = true;
                greenPic[0].classList.remove('animate2');
                yellowPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'g4'){

    row = getComputedStyle(g4).getPropertyValue("grid-row-start");
    col = getComputedStyle(g4).getPropertyValue("grid-column-start");
    if( row === '4' && col === '12' ){
        if(dice === 6){
            g4.style.top = 0;
            g4.style.left = 0;
            position.g4=0;
            g4.style.gridRowStart = 2;
            g4.style.gridColumnStart = 9;
            dice = 0;
        }
    }
    else{
        movement = dice+position.g4;
        if(movement < 57){
            move(position.g4, movement,btn);
            position.g4 += dice;
        }
         if(dice != 6){
                player2 = false;
                player3 = true;
                greenPic[0].classList.remove('animate2');
                yellowPic[0].classList.add('animate2');
            }
        dice = 0;
    }
   }
   for(let i=0; i<green.length ; i++){
       green[i].classList.remove('animate');
   }
//    -------------------------------------yelow------------------------------------------
   if(val === 'y1'){

        row = getComputedStyle(y1).getPropertyValue("grid-row-start");
        col = getComputedStyle(y1).getPropertyValue("grid-column-start");
        if( row === '12' && col === '11' ){
            if(dice === 6){
                y1.style.top = 0;
                y1.style.left = 0;
                position.y1=0;
                y1.style.gridRowStart = 9;
                y1.style.gridColumnStart = 14;
                dice = 0;
            }
        }
        else{
            movement = dice+position.y1;
            if(movement < 57){
                move(position.y1, movement,btn);
                position.y1 += dice;
            }
            if(dice != 6){
                player3 = false;
                player4 = true;
                yellowPic[0].classList.remove('animate2');
                bluePic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'y2'){

        row = getComputedStyle(y2).getPropertyValue("grid-row-start");
        col = getComputedStyle(y2).getPropertyValue("grid-column-start");
        if( row === '11' && col === '12' ){
            if(dice === 6){
                y2.style.top = 0;
                y2.style.left = 0;
                position.y2=0;
                y2.style.gridRowStart = 9;
                y2.style.gridColumnStart = 14;
                dice = 0;
            }
        }
        else{
            movement = dice+position.y2;
            if(movement < 57){
                move(position.y2, movement,btn);
                position.y2 += dice;
            }
             if(dice != 6){
                player3 = false;
                player4 = true;
                yellowPic[0].classList.remove('animate2');
                bluePic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'y3'){

        row = getComputedStyle(y3).getPropertyValue("grid-row-start");
        col = getComputedStyle(y3).getPropertyValue("grid-column-start");
        if( row === '12' && col === '13' ){
            if(dice === 6){
                y3.style.top = 0;
                y3.style.left = 0;
                position.y3=0;
                y3.style.gridRowStart = 9;
                y3.style.gridColumnStart = 14;
                dice = 0;
            }
        }
        else{
            movement = dice+position.y3;
            if(movement < 57){
                move(position.b3, movement,btn);
                position.b3 += dice;
            }
             if(dice != 6){
                player3 = false;
                player4 = true;
                yellowPic[0].classList.remove('animate2');
                bluePic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'y4'){

    row = getComputedStyle(y4).getPropertyValue("grid-row-start");
    col = getComputedStyle(y4).getPropertyValue("grid-column-start");
    if( row === '13' && col === '12' ){
        if(dice === 6){
            y4.style.top = 0;
            y4.style.left = 0;
            position.y4=0;
            y4.style.gridRowStart = 9;
            y4.style.gridColumnStart = 14;
            dice = 0;
        }
    }
    else{
        movement = dice+position.y4;
        if(movement < 57){
            move(position.y4, movement,btn);
            position.y4 += dice;
        }
         if(dice != 6){
                player3 = false;
                player4 = true;
                yellowPic[0].classList.remove('animate2');
                bluePic[0].classList.add('animate2');
            }
        dice = 0;
    }
   }
   for(let i=0; i<yellow.length ; i++){
       yellow[i].classList.remove('animate');
   }
//    ------------------------------------blue----------------------------------------------
   if(val === 'b1'){

        row = getComputedStyle(b1).getPropertyValue("grid-row-start");
        col = getComputedStyle(b1).getPropertyValue("grid-column-start");
        if( row === '12' && col === '2' ){
            if(dice === 6){
                b1.style.top = 0;
                b1.style.left = 0;
                position.b1=0;
                b1.style.gridRowStart = 14;
                b1.style.gridColumnStart = 7;
                dice = 0;
            }
        }
        else{
            movement = dice+position.b1;
            if(movement < 57){
                move(position.b1, movement,btn);
                position.b1 += dice;
            }
            if(dice != 6){
                player4 = false;
                player1 = true;
                bluePic[0].classList.remove('animate2');
                redPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'b2'){

        row = getComputedStyle(b2).getPropertyValue("grid-row-start");
        col = getComputedStyle(b2).getPropertyValue("grid-column-start");
        if( row === '11' && col === '3' ){
            if(dice === 6){
                b2.style.top = 0;
                b2.style.left = 0;
                position.b2=0;
                b2.style.gridRowStart = 14;
                b2.style.gridColumnStart = 7;
                dice = 0;
            }
        }
        else{
            movement = dice+position.b2;
            if(movement < 57){
                move(position.b2, movement,btn);
                position.b2 += dice;
            }
             if(dice != 6){
                player4 = false;
                player1 = true;
                bluePic[0].classList.remove('animate2');
                redPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'b3'){

        row = getComputedStyle(b3).getPropertyValue("grid-row-start");
        col = getComputedStyle(b3).getPropertyValue("grid-column-start");
        if( row === '12' && col === '4' ){
            if(dice === 6){
                b3.style.top = 0;
                b3.style.left = 0;
                position.b3=0;
                b3.style.gridRowStart = 14;
                b3.style.gridColumnStart = 7;
                dice = 0;
            }
        }
        else{
            movement = dice+position.b3;
            if(movement < 57){
                move(position.b3, movement,btn);
                position.b3 += dice;
            }
             if(dice != 6){
                player4 = false;
                player1 = true;
                bluePic[0].classList.remove('animate2');
                redPic[0].classList.add('animate2');
            }
            dice = 0;
        }
   }
   else if(val === 'b4'){

    row = getComputedStyle(b4).getPropertyValue("grid-row-start");
    col = getComputedStyle(b4).getPropertyValue("grid-column-start");
    if( row === '13' && col === '3' ){
        if(dice === 6){
            b4.style.top = 0;
            b4.style.left = 0;
            position.b4=0;
            b4.style.gridRowStart = 14;
            b4.style.gridColumnStart = 7;
            dice = 0;
        }
    }
    else{
        movement = dice+position.b4;
        if(movement < 57){
            move(position.b4, movement,btn);
            position.b4 += dice;
        }
         if(dice != 6){
                player4 = false;
                player1 = true;
                bluePic[0].classList.remove('animate2');
                redPic[0].classList.add('animate2');
            }
        dice = 0;
    }
   }
   for(let i=0; i<blue.length ; i++){
       blue[i].classList.remove('animate');
   }

};
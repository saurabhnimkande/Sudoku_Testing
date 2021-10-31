const matrix=[];
let flag=false;
function check(board,row,col,val){

  
    for (let i=0;i<9;i++){
            if (board[row][i] == val) {
                return false;
            }
        }

  
    for (let i = 0;i<9;i++){
            if (board[i][col] == val) {
                return false;
            } 
        }

   
    let r = Math.floor(row/3)*3;
    let c = Math.floor(col/3)*3;
   
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (board[r + i][j + c] == val) {
                return false;
            } 
        }
    }
    return true;
}

function solve(board,x,y){
    if (x == board.length) { 
        flag = true;
        for(let i=0; i<matrix.length; i++) {
            console.log(matrix[i].join(" "));
        }
        return matrix;
    }
    let next_row = 0; 
    let next_col = 0;
    if (y == board.length-1) { 
        next_row = x + 1;
        next_col = 0;
    } else { 
        next_row = x;
        next_col = y + 1;
    }
    if (board[x][y] != 0) {
        solve(board,next_row,next_col); 
    } else {
        for (let i=1;i<=9;i++){ 
            if (check(board,x,y,i)){
                board[x][y] = i;
                solve(board,next_row,next_col); 
                board[x][y] = 0; 
            }
        }
    }
    return;
}

function runProgram(input) {
    // Write code here
   for(let i=0; i<input.length; i++) {
       matrix.push(input[i]);
   }
   solve(matrix,0,0);
   return matrix;
  }


module.exports = runProgram;
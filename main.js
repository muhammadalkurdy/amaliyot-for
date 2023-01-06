// // 1
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         if (i === j) {
//             document.write("1")
//         } else {
//             document.write("0");
//         }
//     }
//     document.write("<br>")
// }
// 2

// for (let i = 0; i < 5; i++) {
//     for (let j = 4; j >= 0; j--) {
//         if ( i === j){
//             document.write("1")
//         }
//         else{
//             document.write("0")
//         }


//     }
//     document.write("<br>")
    
// }
// 3

for(let i = 0; i < 5;i++){
        document.write("1")
    for(let j = 0; j <= 4; j++){
        
        if(i === 0){
            document.write("1")
        }
        else if (i === 4){
            document.write("1")
            console.log(j);
        }
        else if(j === 4){
            document.write("1")
        }
        else{
            document.write("0")
        }
        
        
    }
    document.write("<br>")
} 


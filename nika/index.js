
// const txt = "madam";
// let splited = txt.split("");

// function palindrom(txt) {
//     if( splited.length / 2 === 0){
//         console.log("არ არის პალინდრომული")
//     } else{
//         let center = splited[Math.round((splited.length - 1) /2)];
//         console.log(center);
//         let firtsPart = splited.slice(0, center);
//         let lastPart = splited.slice(-1, center);
//         if(firtsPart == lastPart){
//             console.log("palindromulia");
//         } else {
//             console.log("ar aris palindromuli");
//         }
//     }

// }
//     palindrom(txt);


/*
Task 3 : 
*/

    // const text = "sad midis Matarebeli"
    // let splittedText = text.split(" ");

    // function toCamelCase(text){
    //     for(let i = 0; i < splittedText.length; i++){
    //         let camelCase = splittedText[i].toUpperCase();
    //     }
    //     mergedText = splittedText[0].concat(splittedText[1], splittedText[2]);
    //     console.log(mergedText);
    //     }
    // toCamelCase();


// console.log(Number("A") - Number("B"));

/*
Task 4: 
 
    
*/

    // function returnCorrect(n){
    //     if( n < 10 && n === 1 ){
    //         console.log(n+"st");
    //     }
    //     if( n < 10 && n === 2){
    //         console.log(n+"nd");
    //     }
    //     if( n < 10 && n === 3){
    //         console.log(n+"rd");
    //     }
    //     if( n < 10 && n === 4){
    //         console.log(n+"th");
    //     } else {
    //         let toString = n.toString();
    //         let toSplit =  toString.split(" ");
    //         let lastDigit = toSplit.slice(-1);
    //         if( lastDigit === 1 ){
    //             console.log(n+"st");
    //         }
    //         if( lastDigit === 2){
    //             console.log(n+"nd");
    //         }
    //         if( lastDigit === 3){
    //             console.log(n+"rd");
    //         }
    //         if( lastDigit >= 3){
    //             console.log(n+"th");
    //         }
    //     }
    // }

    // returnCorrect(321);


/*
Task 6 : 

*/

    // let array1 = [ 1,2,3 ];
    // let array2 = [ 2,30,1 ];

    // function mergedArray(arr){
    //     let array = [...array1, ...array2];
    //     let sortedArray = array.sort((a,b) => a - b);
    //     let result = [...new Set(sortedArray)];

    //     console.log(result);
    // }
    // mergedArray();



// function readyToPutInTheDOM(arr) {
  // your code here
// }
// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Lebron James",
//       age: 40,
//     },
//     {
//       name: "Stephen Curry",
//       age: 40
//     },
//     {
//       name: "Kyrie Irving",
//       age: 5,
//     },
//     {
//       name: "Allen Iverson",
//       age: 16,
//     },
//     {
//       name: "Wilt Chamberlain",
//       age: 100,
//     },
//   ])
// );


/* Task 8 */



    // const array = [ 2, 1, 10 ];
    // const sorted = array.sort((a,b) => b - a);
    // // console.log(sorted);

    // function sumOfDifferences(array){

    //     for(let i = 0; i < sorted.length; i++){
    //         let difference = (sorted[i] - sorted[i+1]) + ( sorted[i+1] - sorted[i+2] );
    //         console.log(difference);
    //     }

    // }

    // sumOfDifferences();
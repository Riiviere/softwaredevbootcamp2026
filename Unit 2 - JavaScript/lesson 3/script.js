// outpu 1 to 5 without using loop
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// output 1 to 5 using loop

//for loop
//loop "for" x many time


// for (let i = 0; 1 < 5; i++) {
//   console.log(1 + 1);
//   console.log(i);
// }

let x = 1;

x++;
console.log(x);

x--
console.log(x);

// let conter = 0;
// for (let i = 1; i <= 5; i++) {
//   if (conter === 5) {
//     console.log("breaking loop at index:" + i);
//     break;
//   }
//   console.log("conter:" + conter);
//   conter++;
// }

// console.log("loop ended");

// let conter = 0;
// for (let i = 1; i <= 5; i++) {
//   if (conter === 5) {
//     console.log("breaking loop at index:" + i);
//     continue;
//   }
//   console.log("index:" + i);
// }

let total = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
}

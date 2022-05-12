// var x : number = 0;

// while (x < 10) {
//     console.log(x);
//     x++
// }

let players : number[] = [1,4,7,3];

// for in
console.log("For/In");
for (let player in players) {   // iterable variable
    console.log(player)
}

// for of
console.log("For/of");
for (let player of players) {
    console.log(player);
    
}
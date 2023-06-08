/**6.Define a function that calculates the area of a circle. Using map (Refer Math.floor for rounding values)

Input: let circles = [10, 30, 50];

Output: [314, 2827, 7853]**/
let circles = [10, 30, 50];
 let a=circles.map((value)=>{
     return Math.floor(3.14*value*value)
 })
 console.log(a)

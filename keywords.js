// Difference between var let and const keywords 

// const is a keyword that can only be used once and must be initalized (i.e. declare and assign)
// let is a keyword that can be re-assigned
// var is a keyword that can be re-declared and re-assigned

// var Num
// Num = 10
// console.log(Num)
// var Num
// Num = 20
// console.log(Num)


// let num 
// num = 10
// console.log(num)
// num = 20
// console.log(num)


// const num = 10
// console.log(num)

//____________________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________________


//Global Level and Block Level Scope

// var n1 = 0
// let n2 = 1
// const n3 = 2

// if(true) {
//     var num1 = 0
//     let num2 = 1
//     const num3 = 2
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
//     console.log(n1)
//     console.log(n2)
//     console.log(n3)
// }

// console.log(num1)
// console.log(num2)
// console.log(num3)

// console.log(n1)

// console.log(n2)

// console.log(n3)

//var has Global level scope
//let and const have Block level scopes



//____________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________

//Function Level Scope
// function LevelScope()
// {
//     var num1 = 0
//     let num2 = 1
//     const num3 = 2
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
// }

// LevelScope()
// console.log(num1)
// console.log(num2)
// console.log(num3)

//No matter what the type is, a variable declared inside a function is not accessible outside the function
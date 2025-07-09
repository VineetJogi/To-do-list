// console.log('i have come from js file')
// let value = 6
// let sq = value * value
// console.log('square is ' + sq)

// console.log(5 == 5.0)
// console.log(5 === 5.0)
// //!but***
// console.log(5 == '5') //?this will give true as it will u after type conversion
// console.log(5 === '5')//?this will give false as it will u without type conversion

// let date = '24 June'
// let finalDate = date || '1 January' //if date is not defined it falls back to default value which is the second value
// console.log(date)
// console.log(finalDate)

// let user = {
//     name: 'Vineet',
//     age: 19,
//     occupation: 'student',
//     CGPA: 9.23,
//     department: 'Information Technology',
//     'city-state': 'Mumbai, Maharashtra'
// };

// console.log(user)
// console.log(user.age)
// console.log(user.occupation)
// console.log(user["city-state"]) //quotes are accessed by the box brackets
// console.log(user.CGPA)

// delete user['city-state']
// console.log(user)

// // let x={num:9};
// // let y=x
// // console.log(`x=${x.num} y=${y.num}`)
// // y.num=1 //this changing is applicable to both x and y becoz both point at the same object referenced
// // console.log(`x=${x.num} y=${y.num}`)

// let {CGPA}=user
// console.log(CGPA)
// console.log(user)

// //localStorage.setItem('age','12')
// console.log(localStorage.getItem('age'))

// localStorage.setItem('user',JSON.stringify(user))       //setting a new item in local storage with key user and value as the string of object user
// console.log(user)                                       //printing the object user
// console.log('user')                                     //printing the object user
// console.log(localStorage.getItem('user'))               //printing the value pointed to by the key 'user' in the local storage
// console.log(JSON.parse(localStorage.getItem('user')))   //printing the value pointed to by the key 'user' in the local storage which is lastly converted back to object

// localStorage.removeItem('age')
// localStorage.clear()

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.getDate())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getHours())
// console.log(myDate.getTimezoneOffset())
// console.log(myDate.getMinutes())
// console.log(myDate.getSeconds())

// let arr = [1,3,4,5,2,6,6]       //!it is refereence only like objhects
// console.log(arr)
// console.log(typeof arr)     //array is a type of object
// console.log(arr[4])
// console.log(arr.length)
// console.log(Array.isArray(arr))
// arr.push(2)   //adds a number at the last
// console.log(arr)
// console.log(arr.pop())      //removes and return the last element
// console.log(arr)
// arr.shift()    //removes the first element
// console.log(arr)
// arr.unshift(1)   //adds to the first element
// console.log(arr)

// //!splice function has different syntaxes
// let A = arr.splice(2,4)     //removes 4 elements starting from index 2
// console.log(arr) 
// console.log(A)

// let arr1 = [1,3,4,5,2,6,6]
// arr1.splice(3)              //removes first 3 elements
// console.log(arr1)    

// let arr2 = [1,3,4,5,2,6,6]
// arr2.splice(2,0,3,5)          //removes no element from index 2 and adds 3 and 5 after index 2
// console.log(arr2)
// arr2.sort()                     //sorts the numeric array
// console.log(arr2)
// arr2.toString
// console.log(arr2)

// let sum = function(num1,num2){
//     return num1+num2
// }

// let sum1 = (num1,num2) => {
//     return num1+num2
// }

// console.log(sum(1,2))
// console.log(sum(sum(1,2),3))
// console.log(sum1(4,5))

/*//!setting timeout
console.log("2+3")
let think1 = () => console.log("let me think ")
let think2 = () => console.log("just there ")
let think3 = () => console.log("here you go ")
let ans = () => console.log("5")
setTimeout(think1,2000)
setTimeout(think2,5000)
setTimeout(think3,6000)
setTimeout(ans,6500)
*/

/*//!setting interval and also cancelling it
let ans = () => console.log(`uth jaa at ${new Date()}`)
let ID = setInterval(ans,1000)
setTimeout(() => clearInterval(ID),7000)*/
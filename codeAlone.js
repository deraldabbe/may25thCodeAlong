var users = [
    {
      id: '12d',
      email: 'tyler@gmail.com',
      name: 'Tyler',
      address: '167 East 500 North'
    },
    {
      id: '15a',
      email: 'cahlan@gyahoo.com',
      name: 'Cahlan',
      address: '135 East 320 North'
    },
    {
      id: '16t',
      email: 'ryan@gmail.com',
      name: 'Ryan',
      address: '192 East 32 North'
    },
  ]

//// .forEach example/////
users.forEach((users) => {
    //console.log(`${users.name} has the email address of ${users.email}`)
    users.nameId = users.id + users.names
})
//console.log(users)

///// .map example//////
let mappedUsers = users.map((users) => {     // this should be used incase "mappedUsers" woul be used later
    return users.email
})
console.log(mappedUsers)
//console.log(users.map((users) => {   //   this could be used and is the same as the above code just shorter
//    return users.email
//}))

////// .filter example //////
let filteredUsers = users.filter((users) => {
return users.email.includes(`gmail`)})

console.log(filteredUsers)

/////////////////////////////////
const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

let myTotal = dogProducts.reduce((acc, curr) => {
    console.log(acc)
return +(acc + curr.basePrice).toFixed(2)
}, 0)     //// set to 0  to represent "acc" because you cant do math with objects

console.log(myTotal)

////// Chaining Method ///////
let myCatTotal = catProducts.filter((element) =>{       // filters out any thing not the display price under 20
    return element.displayPrice < 20
}).reduce((acc, curr) => {
return curr.displayPrice + acc
},0)
// let myCatTotal = catproducts.filter((element)=>element.displayPrice < 200.reduce((acc,curr) => curr.displayPrice + acc,0))
console.log(myCatTotal)





////////////////////////////////
let arr = [1,2,3,4,5,6]


let forEach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}


//forEach(arr,(element, index) => {console.log(element, index)})

//arr.forEach((element, index) => {console.log(element, index)}) this does all of the above minus the arr so its just shorter


let map = (arr, callback) => {    /// this is what .map does
    let results = []
    for(let i = 0; i < arr.length; i++) {
        results.push(callback(arr[i], i, arr))
    }
    return results
}

let mappedArr = map(arr, (element, index) => {
    return element * index})

// console.log(mappedArr)

let stringArr = [`apples`, `bananas`, `kiwi`, `oranges`]

let filteredArr = stringArr.filter((element, index, arr) =>{
    return element.length > 5
})
console.log(filteredArr)

/////////////////////////////
let five = (x,y) => {
    return x+y

    
}
let ten = (callback) => {
 return   callback(2,3) + 5
}
console.log(ten(five))

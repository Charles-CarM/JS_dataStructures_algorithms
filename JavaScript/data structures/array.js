const newList = [1,2,3]
const result = newList[0]

if (newList.includes(1)){
  console.log(true)
}

for(const items in newList){
  if(items === 1){
    console.log(true)
  }
}

//add items to an array

//top
const numbers = []
console.log(numbers.length)
numbers.push(2)

//bottom
const another = []
numbers.unshift()

//pop & push  removes/adds element from top of the stack
//shift & unshift removes/adds element from bottom of the stack

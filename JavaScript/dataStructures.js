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

//Linked List
class ListNode{
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList{
  constructor(head = null) {
    this.head = head
  }
}
let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(7)
let node4 = new ListNode(11)
let node5 = new ListNode(13)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.head.next.data)


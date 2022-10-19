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
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
class LinkedList{
  constructor(head) {
    this.head = null
    this.size = 0;
  }

//insert first node
insertFirst(data) {
  this.head = new ListNode(data, this.head)
  this.size++
}
//insert last node
insertLast(data) {
  let node = new ListNode(data)
  let current

  //if empty, make head
  if(!this.head) {
    this.head = node
  }else {
    current = this.head

    while(current.next){
      current = current.next
    }
    current.next = node
  }
}
//insert at index

//get at index

//remove at index

//clear list

//print list data
printListData() {
  let current = this.head
  while(current) {
    console.log(current.data)
    current = current.next
  }
}

}
const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)

ll.printListData()

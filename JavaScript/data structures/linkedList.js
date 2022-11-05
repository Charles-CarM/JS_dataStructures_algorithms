//Linked List
class Node{
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
class LinkedList{
  constructor() {
    this.head = null
    this.size = 0;
  }

// 1 insert first node
insertFirst(data) {
  this.head = new Node(data, this.head)
  this.size++
}
// 2 insert last node
insertLast(data) {
  let node = new Node(data);
  let current;

  //if empty, make head
  if(!this.head) {
    this.head = node;
  }else {
    current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  this.size++
}
// 3 insert at index
insertAt(data, index) {
  // if index is out of range
  if(index > 0 && index > this.size){
    return;
  }

  // if first index
  if(index === 0) {
    this.insertFirst(data)
    return;
  }

  const node = new Node(data)
  let current, previous;
  //set current to first
  current = this.head
  let count = 0;

  while(count < index) {
    previous = current; //Node before index
    count++;
    current = current.next //Node after index
  }

  node.next = current
  previous.next = node

  this.size++
}
// 4 get at index
getAt(index) {
  let current = this.head;
  let count  = 0;

  while(current) {
    if(count == index) {
      console.log(current.data)
    }
    count++
    current = current.next
  }
    return null
}
// 5 remove at index
removeAt(index) {
  if(index > 0 && index > this.size) {
    return;
  }

  let current = this.head
  let previous
  let count = 0

  //remove first
  if(index === 0) {
    this.head = current.next
  }else {
    while(count < index) {
      count++
      previous = current
      current = current.next
    }

    previous.next = current.next
  }
  this.size--;
}
// 6 clear list
clearList() {
  this.head = null
  this.size = 0
}
//check size
checkSize() {
  let current = this.head
  let count = 0

  while(current){
    count += 1
    current = current.next
  }
  return count
}

// 7 print list data
printListData() {
  let current = this.head
  while(current) {
    console.log(current.data)
    current = current.next
  }
 } 
}

//operations on Linked List
const link = new LinkedList()

link.insertFirst(100)
link.insertFirst(200)
link.insertFirst(300)
//console.log(linli)

link.insertLast(850)
//console.log(linli)

link.insertAt(541, 3)

link.getAt(3)

link.removeAt(2)

link.clearList()

link.checkSize()

link.printListData()

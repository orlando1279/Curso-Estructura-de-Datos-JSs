class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.lenght = 0
    }
    peek() {
        return this.top;
      }
    push(value){
        const newNode = new Node(value)
        if (this.lenght == 0){
        this.bot = newNode
        this.top = newNode
        } else {
    const holdingPointer = this.top
        this.top = newNode;
        this.top.next = holdingPointer
        }   
            this.lenght++;
            return this;
        }    
}
const myStack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    
    pop() {
      if (!this.length) {
    console.error("There is no nodes in the stack.");
      return;
    }
const topNode = this.top;
      if (this.length === 1) {
    this.top = null;
    this.bottom = null;
    } else {
    this.top = this.top.next;
}
    this.length++;
      return topNode
  }

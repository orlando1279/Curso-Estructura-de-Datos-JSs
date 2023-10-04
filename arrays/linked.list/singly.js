let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class MySinglyLinkedList{
    constructor(value){
        this.head ={
            value: value,
            next: null,
        } 
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const newNode= new Node(value)
        this.tail.next =  newNode
        this.tail =  newNode
        this.length++
    }
    preppend(value) {
        const newNode = new Node(value, this.head);
    

        newNode.next = this.head ;
        this.head = newNode;
        this.length++
        return this;
    }
    insert(index, value) {
        if (index === this.length) {
            return; this.append(value)
        }
        const newNode = new Node(value);
        const firtsPointer = gettheIndex(index-1);
        const holdingPointer = firtsPointer.next;
        firtsPointer.next = newNode;
        newNode.next = holdingPointer ;
        this.length++;
       
        return this;
      }
      gettheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while[counter !== index] {
            currentNode = currentNode.next;
            counter++;
        }
            return  currentNode; 
      }
}
let myLinkedList = new MySinglyLinkedList(1)
myLinkedList.append(12)
myLinkedList.append(13)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class MyDoublyLinkedList {
    constructor( value ) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }
    append( value ) {
        const appendedNode = new Node( value )
        appendedNode.prev = this.tail
        this.tail.next = appendedNode
        this.tail = appendedNode
        this.length += 1

        return this
    }
    prepend( value ) {
        const prependedNode = new Node( value )
        this.head.prev = prependedNode
        prependedNode.next = this.head
        this.head = prependedNode

        this.length += 1
        return this
    }
    get( index ){
        let currentNode = this.head

        for( let i=0; i < index; i++){
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert ( value, position ){

        if( position === 0)
            return this.prepend( value )

        else if( position >= this.length )
            return this.append( value )
        else {
            const insertedNode = new Node( value )
            let previousNode = this.get( position - 1 )
            let nextNode = previousNode.next
            
            insertedNode.next = nextNode
            previousNode.next = insertedNode
            insertedNode.prev = previousNode
            nextNode.prev = insertedNode
        }
        this.length += 1
        return this
    }
    remove( index ){
        const removedNode = this.get( index )
        
        if( index === 0) {
            removedNode.next.prev = null
            this.head = this.head.next
        }
        else{
            const previousNode = this.get( index - 1 )

            if( index === this.length - 1 ){
                previousNode.next = null
                this.tail = previousNode
            } 
            else {
                previousNode.next = removedNode.next
                removedNode.next.prev = previousNode
            }     
        }
        this.length -= 1
        return removedNode
    }
}

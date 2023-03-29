Here is a JavaScript solution for the problem:

```javascript
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    getNthNodeFromEnd(n) {
        let mainPtr = this.head;
        let refPtr = this.head;
        let count = 0;
        if (this.head != null) {
            while (count < n) {
                if (refPtr == null) {
                    console.log(`${n} is greater than the no. of nodes in list`);
                    return;
                }
                refPtr = refPtr.next;
                count++;
            }
            if (refPtr == null) {
                this.head = this.head.next;
                if (this.head != null)
                    console.log(`Node no. ${n} from last is ${mainPtr.data}`);
            } else {
                while (refPtr != null) {
                    mainPtr = mainPtr.next;
                    refPtr = refPtr.next;
                }
                console.log(`Node no. ${n} from last is ${mainPtr.data}`);
            }
        }
    }
}

let list = new LinkedList();
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtEnd(60);
list.getNthNodeFromEnd(3);
```

This console application creates a singly linked list and provides a method to find the Nth node from the end of the list. The `LinkedList` class has methods to insert a node at the end of the list (`insertAtEnd`) and to get the Nth node from the end (`getNthNodeFromEnd`). The `Node` class represents a node in the list. The `getNthNodeFromEnd` method uses two pointers (`mainPtr` and `refPtr`) to traverse the list and find the Nth node from the end.
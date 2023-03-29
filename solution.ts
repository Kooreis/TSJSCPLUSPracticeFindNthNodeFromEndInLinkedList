Here is a TypeScript solution for the problem:

```typescript
class Node {
    data: number;
    next: Node | null;

    constructor(data: number, next: Node | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    insertAtEnd(data: number): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    findNthFromEnd(n: number): Node | null {
        let firstPointer = this.head;
        let secondPointer = this.head;

        for (let i = 0; i < n; i++) {
            if (secondPointer === null) {
                return null;
            }
            secondPointer = secondPointer.next;
        }

        while (secondPointer) {
            firstPointer = firstPointer!.next;
            secondPointer = secondPointer.next;
        }

        return firstPointer;
    }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
linkedList.insertAtEnd(5);

const nthNodeFromEnd = linkedList.findNthFromEnd(2);
if (nthNodeFromEnd) {
    console.log(`The 2nd node from the end is ${nthNodeFromEnd.data}`);
} else {
    console.log('The linked list does not have enough nodes');
}
```

This solution uses two pointers to find the Nth node from the end in a singly linked list. The second pointer moves N nodes ahead of the first pointer. Then, both pointers move together until the second pointer reaches the end of the list. At this point, the first pointer will be at the Nth node from the end.
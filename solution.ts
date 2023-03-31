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
}
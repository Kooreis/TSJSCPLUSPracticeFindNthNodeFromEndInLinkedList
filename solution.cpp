```cpp
#include <iostream>

struct Node {
    int data;
    Node* next;
};

Node* createNode(int data) {
    Node* newNode = new Node();
    if (!newNode) {
        std::cout << "Memory error\n";
        return NULL;
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

Node* insertNode(Node* head, int data) {
    if (head == NULL) {
        head = createNode(data);
    } else {
        Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        Node* newNode = createNode(data);
        temp->next = newNode;
    }
    return head;
}

Node* findNthFromEnd(Node* head, int n) {
    if (head == NULL || n < 1) {
        return NULL;
    }
    Node* ptr1 = head;
    Node* ptr2 = head;
    for (int i = 0; ptr1 != NULL && i < n; i++) {
        ptr1 = ptr1->next;
    }
    if (ptr1 == NULL) {
        return NULL;
    }
    while (ptr1 != NULL) {
        ptr1 = ptr1->next;
        ptr2 = ptr2->next;
    }
    return ptr2;
}

int main() {
    Node* head = NULL;
    head = insertNode(head, 1);
    head = insertNode(head, 2);
    head = insertNode(head, 3);
    head = insertNode(head, 4);
    head = insertNode(head, 5);
    int n = 3;
    Node* nthNode = findNthFromEnd(head, n);
    if (nthNode != NULL) {
        std::cout << "The " << n << "th node from the end is " << nthNode->data;
    } else {
        std::cout << "The " << n << "th node from the end does not exist";
    }
    return 0;
}
```
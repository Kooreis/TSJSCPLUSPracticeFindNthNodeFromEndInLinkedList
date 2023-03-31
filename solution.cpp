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
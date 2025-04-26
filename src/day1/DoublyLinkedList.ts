type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {

    }
    
    insertAt(item: T, idx: number): void {

    }

    append(item: T): void {

    }

    remove(item: T): T | undefined {

    }

    get(idx: number): T | undefined {
        let curr = this.head;
        // loop through the list until we find the index, and it has to be something there
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }

    removeAt(idx: number): T | undefined {

    }
}